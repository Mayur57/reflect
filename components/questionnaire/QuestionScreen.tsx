import { motion } from 'framer-motion';
import { QuestionNavigation } from './QuestionNavigation';
import { ProgressBar } from './ProgressBar';

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
  fadeOut
}: QuestionScreenProps) => (
  <motion.div
    key={questionIndex}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: fadeOut ? 0 : 1, y: fadeOut ? -20 : 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="w-full max-w-2xl mx-4"
  >
    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <QuestionNavigation
        currentIndex={questionIndex}
        totalQuestions={totalQuestions}
        onNavigate={onNavigate}
      />

      <div className="text-center space-y-6">
        <ProgressBar current={questionIndex} total={totalQuestions} />
        <h2 className="text-2xl font-serif text-amber-900 mt-2">
          {question}
        </h2>
      </div>

      <form onSubmit={onSubmit} className="mt-8 space-y-6">
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => onAnswerChange(e.target.value)}
            placeholder="Take your time to reflect..."
            className="w-full min-h-[160px] p-6 rounded-xl border-2 border-amber-200 
                     focus:ring-2 focus:ring-amber-500 focus:border-transparent
                     bg-white/50 backdrop-blur-sm resize-none
                     placeholder:text-amber-300"
            required
          />
          <div className="absolute bottom-4 right-4 text-amber-400 text-sm">
            {answer.length} characters
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 
                     text-white rounded-full font-medium
                     hover:from-amber-600 hover:to-orange-600 transform 
                     hover:scale-105 transition-all duration-300 
                     shadow-lg hover:shadow-xl"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  </motion.div>
);