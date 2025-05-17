
import React from 'react';
import { PortfolioSize } from '@/types';

interface PortfolioSizeStepProps {
  selectedOption: PortfolioSize | null;
  onSelect: (option: PortfolioSize) => void;
}

export function PortfolioSizeStep({ selectedOption, onSelect }: PortfolioSizeStepProps) {
  const options: PortfolioSize[] = ['<30K', '30K–100K', '100K–300K', '>300K'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2 text-foreground">What's your portfolio size?</h2>
      <p className="text-muted-foreground mb-8">
        Different platforms have different minimum requirements and fee structures.
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
