
import React from 'react';
import { AssetType } from '@/types';
import { Checkbox } from '@/components/ui/checkbox';

interface AssetTypesStepProps {
  selectedOptions: AssetType[];
  onToggle: (option: AssetType) => void;
}

export function AssetTypesStep({ selectedOptions, onToggle }: AssetTypesStepProps) {
  const options: AssetType[] = ['Stocks', 'Bonds', 'ETFs', 'Crypto', 'Forex'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2">What assets do you want to trade?</h2>
      <p className="text-muted-foreground mb-8">
        Select all asset types you're interested in trading.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                {option === 'Stocks' && 'Individual company shares'}
                {option === 'Bonds' && 'Fixed income securities'}
                {option === 'ETFs' && 'Exchange-traded funds'}
                {option === 'Crypto' && 'Cryptocurrency assets'}
                {option === 'Forex' && 'Foreign exchange currency pairs'}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
