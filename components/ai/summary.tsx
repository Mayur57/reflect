import React, { useState } from "react";

const CharacterSummary = ({ answers }: any) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchSummary = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/summary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Character Summary</h2>

      {!result && !loading && (
        <button
          onClick={fetchSummary}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Generate Summary
        </button>
      )}

      {loading && <p className="text-gray-500">Generating summary...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {result && (
        <div className="mt-4">
          <p>
            <strong>Character Summary:</strong> {result.summary}
          </p>
          <p>
            <strong>Next Year Prediction:</strong> {result.prediction}
          </p>
        </div>
      )}
    </div>
  );
};

export default CharacterSummary;
