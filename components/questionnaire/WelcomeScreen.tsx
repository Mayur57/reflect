"use client";
import { motion } from "framer-motion";

export function WelcomeScreen({onStart} : any) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-2xl rounded-2xl p-8"
      >
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-serif font-bold text-white">
              Welcome to Your Journey
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
            <p className="text-lg text-white leading-relaxed">
              We've created a safe space for you to explore your thoughts,
              feelings, and dreams. Take your time with each question - there
              are no right or wrong answers, only your truth.
            </p>
          </div>
          <button
            onClick={onStart}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full 
                   text-lg font-medium hover:from-amber-600 hover:to-orange-600 transform 
                   hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Begin Your Journey
          </button>
        </div>
      </motion.div>
    </div>
  );
}
