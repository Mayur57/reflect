"use client";
import { motion } from "framer-motion";
import CharacterSummary from "../ai/summary";

const answers = {
  "What was the happiest moment of your year?":
    "When my sister had her first baby. Holding my tiny nephew and seeing her become a mother filled me with indescribable joy. In that moment, our family felt complete in a new way.",
  "When did you feel most at peace, and why?":
    "During a solo camping trip in September. Sitting by the lake at sunrise, watching mist rise off the water with no sounds except birdsong and gentle waves. For the first time in months, my mind was completely quiet.",
};

export function ThankYouScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 w-full min-w-56">
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
            <div className="w-full border text-white">
              <h3 className="mt-3 font-ss4 text-lg sm:text-xl px-4">Save to PDF</h3>
              <p className="text-sm text-white/80 pt-2 px-4 font-light">
                Save your responses along with the questions to revisit. We will
                be here to see you grow a year later too!
              </p>
              <>
                <div className="w-full h-[1px] bg-white mt-6" />
                <div className="flex w-full items-center justify-center text-sm py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Download
                </div>
              </>
            </div>
            <div className="w-full border text-white">
              <h3 className="mt-3 font-ss4 text-lg sm:text-xl px-4">Your personality</h3>
              <p className="text-sm text-white/80 pt-2 px-4 font-light">
                Save your responses along with the questions to revisit. We will
                be here to see you grow a year later too!
              </p>
              <>
                <div className="w-full h-[1px] bg-white mt-6" />
                <div className="flex w-full items-center justify-center text-sm py-3 hover:bg-white hover:text-black transition-all duration-300">
                  Generate ✨
                </div>
              </>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-3 px-4  w-full border mt-3">
            <h3 className="font-ss4 text-lg text-white">Share</h3>
            <div>
              <a
                href="#"
                className="p-2 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Twitter ↗
              </a>
              <a
                href="#"
                className="p-2 text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                Bluesky ↗
              </a>
            </div>
          </div>
          {/* <CharacterSummary answers={answers} /> */}
        </div>
      </motion.div>
    </div>
  );
}
