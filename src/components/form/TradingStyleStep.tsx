
import React from 'react';
import { TradingStyle } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

interface TradingStyleStepProps {
  selectedOptions: TradingStyle[];
  onToggle: (option: TradingStyle) => void;
}

export function TradingStyleStep({ selectedOptions, onToggle }: TradingStyleStepProps) {
  const options: TradingStyle[] = ['Day trading', 'Swing trading', 'Long-term', 'Passive'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2">What's your trading style?</h2>
      <p className="text-muted-foreground mb-8">
        Select all trading styles that apply to your investment approach.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option);
          
          return (
            <div
              key={option}
              className={`form-option ${isSelected ? 'selected' : ''}`}
              onClick={() => onToggle(option)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">{option}</h3>
                <Checkbox 
                  checked={isSelected}
                  onCheckedChange={() => onToggle(option)}
                />
              </div>
              <p className="text-sm text-muted-foreground">
                {option === 'Day trading' && 'Multiple trades within a single day'}
                {option === 'Swing trading' && 'Trades lasting from days to weeks'}
                {option === 'Long-term' && 'Holding positions for months or years'}
                {option === 'Passive' && 'Set and forget investment approach'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
