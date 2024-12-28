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
    <div className="w-full flex items-center justify-center px-2 relative">
      <button
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="px-4 py-2 text-xs text-white hover:bg-white hover:text-black transition-all"
      >
        {currentIndex + 1} / {totalQuestions}
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full mt-2 w-48 max-h-60 overflow-y-auto bg-black shadow-lg z-10 border border-white rounded">
          {Array.from({ length: totalQuestions }, (_, i) => (
            <button
              key={i}
              onClick={() => {
                onNavigate(i);
                setIsDropdownOpen(false);
              }}
              className={`w-full px-4 py-2 text-left text-white hover:bg-amber-500 transition-colors
                           ${
                             i === currentIndex ? "bg-amber-100 text-black" : ""
                           }`}
            >
              Question {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
