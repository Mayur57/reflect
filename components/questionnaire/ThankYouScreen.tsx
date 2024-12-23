"use client";
import { motion } from "framer-motion";

export function ThankYouScreen() {
    return       <div className="min-h-screen flex items-center justify-center p-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
    >
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-serif font-bold text-amber-900">
          Thank you for sharing your journey
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
        <p className="text-lg text-amber-800">
          Your responses have been saved. Remember, self-discovery is an ongoing journey.
        </p>
      </div>
    </motion.div>
  </div>
}