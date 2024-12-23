interface ProgressBarProps {
    current: number;
    total: number;
  }
  
  export const ProgressBar = ({ current, total }: ProgressBarProps) => (
    <div className="w-full h-2 bg-gray-100 rounded-full mt-2">
      <div 
        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  );