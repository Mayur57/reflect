import React from "react";

const getPersonalityType = (openness: any = 50, emotionality: any = 50) => {
  if (openness > 50 && emotionality > 50) {
    return {
      title: "The Dreamer",
      description:
        "Highly creative and emotionally intense, you thrive in exploring new ideas and expressing your emotions vividly.",
    };
  } else if (openness <= 50 && emotionality > 50) {
    return {
      title: "The Grounded Visionary",
      description:
        "Practical yet emotionally expressive, you balance stability with a dynamic emotional depth.",
    };
  } else if (openness > 50 && emotionality <= 50) {
    return {
      title: "The Thoughtful Explorer",
      description:
        "Creative and emotionally composed, you prefer to explore ideas thoughtfully while maintaining emotional balance.",
    };
  } else {
    return {
      title: "The Steady Realist",
      description:
        "Practical and emotionally balanced, you are grounded and focused on stability and tradition.",
    };
  }
};

const CharacterSummary = ({ states }: any) => {
  const { result, loading, error } = states;

  const personality = getPersonalityType(
    result?.openness,
    result?.emotionality
  );

  console.log({states})
  return (
    <div className="relative p-6 border text-white mt-3 bg-black">
      <div className="absolute inset-0 -z-10 blur-lg animate-glow-gradient overflow-hidden rounded-md" />

      {loading && <p className="text-gray-500">Analyzing...</p>}

      {error && (
        <p className="text-red-500">Couldn't analyze. Sorry about that :/</p>
      )}

      {result && (
        <>
          <h2 className="text-xl font-ss4 mb-4">Your Personality</h2>
          <div className="mt-4 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <div className="relative aspect-square bg-gray-800 rounded-lg">
                <div className="absolute left-1/2 top-0 h-full w-px bg-gray-600 -translate-x-1/2" />
                <div className="absolute top-1/2 left-0 w-full h-px bg-gray-600 -translate-y-1/2" />
                <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2 text-xs text-gray-300 bg-gray-800">
                  Imaginative
                </div>
                <div className="absolute left-1/2 top-2 transform -translate-x-1/2 text-xs text-gray-300 bg-gray-800">
                  Conventional
                </div>
                <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xs text-gray-300 bg-gray-800">
                  Stable
                </div>
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xs text-gray-300 bg-gray-800">
                  Dynamic
                </div>
                <div
                  className="absolute bg-blue-500 rounded-full"
                  style={{
                    width: "16px",
                    height: "16px",
                    left: `${result?.openness}%`,
                    top: `${100 - result?.emotionality}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-ss4 font-semibold">
                {personality.title}
              </h3>
              <p className="mt-1 text-sm font-light">
                {personality.description}
              </p>
            </div>
          </div>

          <div className="w-full py-4">
            <h2 className="text-xl font-ss4 mb-2">About You</h2>
            <p className="text-xs font-light opacity-80">
              {result?.summary || "Error loading data"}
            </p>
          </div>

          <div className="w-full py-4">
            <h2 className="text-xl font-ss4 mb-2">What's Next</h2>
            <p className="text-xs font-light opacity-80">
              {result?.prediction || "Error loading data"}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterSummary;
