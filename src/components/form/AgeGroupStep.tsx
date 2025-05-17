
import React from 'react';
import { AgeGroup } from '@/types';

interface AgeGroupStepProps {
  selectedOption: AgeGroup | null;
  onSelect: (option: AgeGroup) => void;
}

export function AgeGroupStep({ selectedOption, onSelect }: AgeGroupStepProps) {
  const options: AgeGroup[] = ['18–30', '31–60', '60+'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2 text-foreground">What's your age group?</h2>
      <p className="text-muted-foreground mb-8">
        We use this information to recommend age-appropriate investment strategies.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option}
            className={`form-option ${option === selectedOption ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            <h3 className="text-lg font-medium text-foreground">{option}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
