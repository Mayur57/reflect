"use client";
import { motion } from "framer-motion";
import CharacterSummary from "../ai/summary";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import generatePDF from "@/lib/generatePdf";

const answers = {
  "What was the happiest moment of your year?":
    "When my sister had her first baby. Holding my tiny nephew and seeing her become a mother filled me with indescribable joy. In that moment, our family felt complete in a new way.",
  "When did you feel most at peace, and why?":
    "During a solo camping trip in September. Sitting by the lake at sunrise, watching mist rise off the water with no sounds except birdsong and gentle waves. For the first time in months, my mind was completely quiet.",
};

const STORAGE_KEY: string = "data";
const ENCRYPTION_SECRET: any = "17da4a9d888d3145fa74e8c9";

const encryptData = (data: any) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(data),
    ENCRYPTION_SECRET
  ).toString();
};

const decryptData = (data: string) => {
  const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_SECRET);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export function ThankYouScreen({ answers2 }: any) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(STORAGE_KEY);
    if (storedData) {
      try {
        const decrypted = decryptData(storedData);
        setResult(decrypted);
      } catch {
        console.error("Failed to decrypt local storage data.");
      }
    }
  }, []);

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
      localStorage.setItem(STORAGE_KEY, encryptData(data));
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-12 pb-20 sm:py-4 w-full min-w-56">
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1.01 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl rounded-2xl p-8"
      >
        <div className="text-left">
          <h2 className="text-3xl font-ss4 text-white">That's it</h2>
          <div className="w-16 h-[1.5px] bg-white mt-3" />
          <p className="text-white mt-5">
            Hoping this introspective activity was helpful to you.
          </p>
          <div className="flex flex-row gap-3 mt-6">
            <div className="w-full border text-white flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-ss4 text-lg sm:text-xl px-4">
                  Save to PDF
                </h3>
                <p className="text-sm text-white/80 pt-2 px-4 font-light">
                  Save your responses along with the questions to revisit. We
                  will be here to see you grow a year later too!
                </p>
              </div>
              <div>
                <div className="w-full h-[1px] bg-white mt-6" />
                <button
                  onClick={() => {
                    generatePDF(answers, { ...result });
                  }}
                  className="flex w-full items-center justify-center text-sm py-3 hover:bg-white hover:text-black transition-all duration-300"
                >
                  Download
                </button>
              </div>
            </div>
            <div className="w-full border text-white flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-ss4 text-lg sm:text-xl px-4">
                  About you
                </h3>
                <p className="text-sm text-white/80 pt-2 px-4 font-light">
                  Save your responses along with the questions to revisit. We
                  will be here to see you grow a year later too!
                </p>
              </div>
              <div>
                <div className="w-full h-[1px] bg-white mt-6" />
                <button
                  onClick={fetchSummary}
                  disabled={!!result}
                  className="flex w-full items-center justify-center text-sm py-3 hover:bg-white hover:text-black transition-all duration-300 disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-white disabled:hover:cursor-not-allowed"
                >
                  {!!result ? "Already generated" : "Generate"}
                </button>
              </div>
            </div>
          </div>
          {(loading || result) && (
            <CharacterSummary
              states={{ loading, error, result }}
              fetchSummary={fetchSummary}
            />
          )}
          <div className="flex flex-row justify-between items-center py-3 px-4 w-full border mt-3">
            <h3 className="font-ss4 text-lg text-white">Share</h3>
            <div className="flex gap-2">
              {["Twitter ↗", "Bluesky ↗"].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
