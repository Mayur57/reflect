import { useState } from 'react';

interface QuestionNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onNavigate: (index: number) => void;
}

export const QuestionNavigation = ({ 
  currentIndex, 
  totalQuestions, 
  onNavigate 
}: QuestionNavigationProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={() => onNavigate(currentIndex - 1)}
        disabled={currentIndex === 0}
        className="px-4 py-2 text-amber-600 disabled:opacity-50 disabled:cursor-not-allowed
                 hover:bg-amber-50 rounded-lg transition-colors"
      >
        Previous
      </button>

      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="px-4 py-2 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
        >
          Question {currentIndex + 1} of {totalQuestions}
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full mt-2 w-48 max-h-60 overflow-y-auto bg-white rounded-lg shadow-lg">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <button
                key={i}
                onClick={() => {
                  onNavigate(i);
                  setIsDropdownOpen(false);
                }}
                className={`w-full px-4 py-2 text-left hover:bg-amber-50 transition-colors
                           ${i === currentIndex ? 'bg-amber-100' : ''}`}
              >
                Question {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};