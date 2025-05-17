
import React from 'react';
import { FormData } from '@/types';

interface ReviewStepProps {
  formData: FormData;
}

export function ReviewStep({ formData }: ReviewStepProps) {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-display font-bold mb-2">Review your information</h2>
      <p className="text-muted-foreground mb-8">
        Please review your responses before submitting.
      </p>

      <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Age Group</h3>
            <p className="text-lg">{formData.age_group || 'Not selected'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Portfolio Size</h3>
            <p className="text-lg">{formData.portfolio_size || 'Not selected'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Yearly Deposit</h3>
            <p className="text-lg">{formData.yearly_deposit || 'Not selected'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Preferred Exchange</h3>
            <p className="text-lg">{formData.preferred_exchange || 'Not selected'}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Trading Style</h3>
            <p className="text-lg">
              {formData.trading_style.length > 0 
                ? formData.trading_style.join(', ') 
                : 'None selected'}
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground">Asset Types</h3>
            <p className="text-lg">
              {formData.asset_types.length > 0 
                ? formData.asset_types.join(', ') 
                : 'None selected'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
