"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export function WelcomeScreen({ onStart }: any) {
  return (
    <div className="min-h-screen flex items-center justify-center px-2 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 0, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1.01 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="w-full max-w-2xl rounded-2xl p-8"
      >
        <div className="text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl sm:text-[5rem] font-serif text-white leading-tight">
              Reflect
            </h1>
            <div className="w-24 h-[1.5px] bg-white" />
            <p className="text-sm sm:text-base text-white leading-relaxed font-sans">
              A safe space for exploring thoughts, feelings, and dreams.
              Take your time with each question - there are no right or wrong answers, only your truth.
            </p>
          </div>
          <button
            onClick={onStart}
            className="px-16 py-4 border border-white text-white
                   text-sm hover:from-amber-600 hover:to-orange-600 transform
                   hover:backdrop-blur-3xl tracking-widest uppercase transition-all duration-300 shadow-lg hover:bg-white hover:text-black"
          >
            Start
          </button>
          <a
            href="https://mayurbhoi.com/posts/reflect"
            target="_blank"
            className="flex text-white font-light"
          >
            <span className="text-sm sm:text-base underline decoration-[0.5px] underline-offset-4">
              Read the blog
            </span>
            &nbsp;-&gt;
          </a>
          <p className="text-white font-light text-xs opacity-75">
            Made by <a href="https://mayurbhoi.com" target="_blank" className="underline decoration-[0.5px] underline-offset-4 decoration-dotted hover:decoration-[1px] hover:decoration-solid">Mayur Bhoi</a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
