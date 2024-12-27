// app/api/character-summary/route.js

import { NextResponse } from 'next/server';

export async function POST(request: NextResponse) {
  try {
    const { answers } = await request.json();

    const prompt = `
      Based on the following answers, provide a JSON response with:
      1. "characterSummary": A two-sentence summary of the person's emotional and psychological character based on the answers.
      2. "nextYearPrediction": Two sentences predicting how the person might experience the next year based on these answers.

      Answers:
      ${JSON.stringify(answers)}

      Return it in the form:
      
      summary: <text>
      prediction: <text>
      
      This is VERY, VERY IMPORTANT. NO EXTRA CHARACTERS EXCEPT AS IN ABOVE FORMAT.
    `;

    const apiResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`, // Replace with your API key
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      }),
    });

    if (!apiResponse.ok) {
      throw new Error(`API error: ${apiResponse.statusText}`);
    }

    const data = await apiResponse.json();
    const assistantMessage = data.choices?.[0]?.message?.content;
    if (assistantMessage) {
        const summary: string = assistantMessage.split("\n\n")[0].split("summary: ")[1]
        const prediction: string = assistantMessage.split("\n\n")[1].split("prediction: ")[1]
      return NextResponse.json({summary, prediction});
    } else {
      throw new Error('Invalid response from the API');
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Something went wrong' }, { status: 500 });
  }
}
