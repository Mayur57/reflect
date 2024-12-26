import { useState } from "react";

interface QuestionNavigationProps {
  currentIndex: number;
  totalQuestions: number;
  onNavigate: (index: number) => void;
}

export const QuestionNavigation = ({
  currentIndex,
  totalQuestions,
  onNavigate,
}: QuestionNavigationProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div className="w-full flex items-center justify-center px-2">
      <div className="px-4 py-2 text-xs text-white transition-colors">
        {currentIndex + 1} / {totalQuestions}
      </div>

      {isDropdownOpen && (
        <div className="absolute top-full mt-2 w-48 max-h-60 overflow-y-auto bg-white shadow-lg z-10">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                onNavigate(i);
                setIsDropdownOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-amber-50 transition-colors
                           ${i === currentIndex ? "bg-amber-100" : ""}`}
            >
              Question {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
