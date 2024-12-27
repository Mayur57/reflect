const CharacterSummary = ({ states }: any) => {
  const { result, loading, error } = states;
  return (
    <div className="relative p-6 border text-white mt-3 bg-black">
      <div className="absolute inset-0 -z-10 blur-lg animate-glow-gradient overflow-hidden rounded-md" />
      <h2 className="text-xl font-ss4 mb-4">About You</h2>

      {loading && <p className="text-gray-500">Analyzing...</p>}

      {error && <p className="text-red-500">Couldn't analayze. Sorry about that :/</p>}

      {result && (
        <div className="mt-4 space-y-3 font-light text-sm">
          <p>
            <span className="font-normal underline">Character Summary:</span>{" "}
            {result.summary}
          </p>
          <p>
            <span className="font-normal underline">Next Year Prediction:</span>{" "}
            {result.prediction}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterSummary;
