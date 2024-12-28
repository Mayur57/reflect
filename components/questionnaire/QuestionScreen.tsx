import { motion } from "framer-motion";
import { QuestionNavigation } from "./QuestionNavigation";
import { ProgressBar } from "./ProgressBar";

interface QuestionScreenProps {
  questionIndex: number;
  question: string;
  answer: string;
  totalQuestions: number;
  onAnswerChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onNavigate: (index: number) => void;
  fadeOut: boolean;
}

export const QuestionScreen = ({
  questionIndex,
  question,
  answer,
  totalQuestions,
  onAnswerChange,
  onSubmit,
  onNavigate,
  fadeOut,
}: QuestionScreenProps) => (
  <motion.div
    key={questionIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: fadeOut ? 0 : 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.25 }}
    className="w-full max-w-2xl mx-4"
  >
    <div className="p-8">
      <h2 className="text-4xl font-ss4 text-white mt-2 text-left tracking-tighter leading-[1.1]">
        {question}
      </h2>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Take your time to reflect..."
            className="w-full min-h-[160px] p-6 border-2 border-white focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-transparent resize-none text-white placeholder:text-white/30"
            required
          />
          <div className="absolute bottom-4 right-4 text-white/50 text-sm">
            {answer.length} characters
          </div>
        </div>
        <ProgressBar current={questionIndex} total={totalQuestions} />
        <div className="flex justify-between gap-2">
          <button
            onClick={() => {
              onNavigate(questionIndex - 1);
            }}
            className="px-2 w-full py-4 border border-white text-white
                   text-xs hover:from-amber-600 hover:to-orange-600 transform
                   hover:backdrop-blur-3xl tracking-widest uppercase transition-all duration-300 shadow-lg hover:bg-white hover:text-black"
          >
            previous
          </button>
          <QuestionNavigation
            currentIndex={questionIndex}
            totalQuestions={totalQuestions}
            onNavigate={(index) => {
              onNavigate(index);
            }}
          />
          <button
            type="submit"
            className="px-2 w-full py-4 border border-white text-white
                   text-xs hover:from-amber-600 hover:to-orange-600 transform
                   hover:backdrop-blur-3xl tracking-widest uppercase transition-all duration-300 shadow-lg hover:bg-white hover:text-black"
          >
            next
          </button>
        </div>
      </form>
      <div className="flex w-full justify-center pt-4">
        <p className="text-xs text-white/60">
        Keep your responses between 100-250 characters for the best results. Don't worry—your progress is saved automatically.
        </p>
      </div>
    </div>
  </motion.div>
);
