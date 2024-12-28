import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { answers } = await request.json();

    const prompt = `
      Based on the following answers, provide a JSON response with:
      1. "summary": A two-sentence summary of the person's emotional and psychological character based on the answers.
      2. "prediction": Two sentences predicting how and what the person might experience in the future based on these answers.
      3. "emotional": A whole number (with granularity of 1) from 0-100 that classifies the person ranging from Stable (calm, grounded, and composed) to Dynamic (emotionally expressive, intense, and highly sensitive) respectively. Captures the emotional balance and variability of the person
      4. "openness": A whole number (with granularity of 1) from 0-100 that classifies the person ranging from Conventional (prefers routines, traditions, and practicality) to Imaginative (embraces novelty, abstract thinking, and exploration) respectively. Represents how open a person is to new experiences, ideas, and creativity.
      Answers:
      ${JSON.stringify(answers)}

      Keep in mind that the person is asking for information, so you reply by referring them as "you".
      Do not make any precise predictions in terms of time, place or any other specific detail.
      
      Only respond in the form of a string with no other information:

      "summary:<text>\nprediction:<text>\nopenness:<number>\nemotional\n<number>"
      
      This is VERY, VERY IMPORTANT. NO EXTRA CHARACTERS EXCEPT AS IN ABOVE FORMAT.
    `;

    const apiResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    if (!apiResponse.ok) {
      throw new Error(`API error: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();
    const assistantMessage = data.choices?.[0]?.message?.content;
    console.log({assistantMessage})
    if (assistantMessage) {
      const params: any = assistantMessage.split("\n");
      const about = params[0].split("summary:")[1];
      const next = params[1].split("prediction:")[1];
      const o1 = parseInt(params[2].split("openness:")[1]);
      const e1 = parseInt(params[3].split("emotional:")[1]);
      console.log({
        summary: about,
        prediction: next,
        openness: o1,
        emotionality: e1,
      })
      return NextResponse.json({
        summary: about,
        prediction: next,
        openness: o1,
        emotionality: e1,
      });
    } else {
      throw new Error("Invalid response from the API");
    }
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
