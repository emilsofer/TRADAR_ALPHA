
import React from 'react';
import { PreferredExchange } from '@/types';

interface PreferredExchangeStepProps {
  selectedOption: PreferredExchange | null;
  onSelect: (option: PreferredExchange) => void;
}

export function PreferredExchangeStep({ selectedOption, onSelect }: PreferredExchangeStepProps) {
  const options: PreferredExchange[] = ['Israeli', 'US', 'Both'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2">Preferred exchange?</h2>
      <p className="text-muted-foreground mb-8">
        Which markets are you most interested in trading?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option}
            className={`form-option ${option === selectedOption ? 'selected' : ''}`}
            onClick={() => onSelect(option)}
          >
            <h3 className="text-lg font-medium">{option}</h3>
            <p className="text-sm text-muted-foreground">
              {option === 'Israeli' && 'Tel Aviv Stock Exchange (TASE)'}
              {option === 'US' && 'NYSE, NASDAQ, and other US exchanges'}
              {option === 'Both' && 'Access to both Israeli and US markets'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
