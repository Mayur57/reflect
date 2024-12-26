interface ProgressBarProps {
    current: number;
    total: number;
  }
  
  export const ProgressBar = ({ current, total }: ProgressBarProps) => (
    <div className="w-full h-4 border-[1.5px]">
      <div 
        className="h-full bg-white transition-all duration-300"
        style={{ width: `${((current + 1) / total) * 100}%` }}
      />
    </div>
  );