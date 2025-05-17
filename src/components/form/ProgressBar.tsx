
import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="flex flex-col gap-2 my-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% completed</span>
      </div>
      <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-tradar-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2">
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <div 
            key={idx}
            className={`progress-step ${idx + 1 < currentStep ? 'completed' : ''} ${idx + 1 === currentStep ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
