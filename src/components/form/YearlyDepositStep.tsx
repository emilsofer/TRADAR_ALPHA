
import React from 'react';
import { YearlyDeposit } from '@/types';

interface YearlyDepositStepProps {
  selectedOption: YearlyDeposit | null;
  onSelect: (option: YearlyDeposit) => void;
}

export function YearlyDepositStep({ selectedOption, onSelect }: YearlyDepositStepProps) {
  const options: YearlyDeposit[] = ['<5K', '5K–20K', '20K–100K', '>100K', 'Not Sure'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2 text-foreground">Yearly deposit amount?</h2>
      <p className="text-muted-foreground mb-8">
        How much do you plan to add to your investment account each year?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
