
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormData, AgeGroup, PortfolioSize, YearlyDeposit, TradingStyle, AssetType, PreferredExchange } from '@/types';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProgressBar } from '@/components/form/ProgressBar';
import { AgeGroupStep } from '@/components/form/AgeGroupStep';
import { PortfolioSizeStep } from '@/components/form/PortfolioSizeStep';
import { YearlyDepositStep } from '@/components/form/YearlyDepositStep';
import { TradingStyleStep } from '@/components/form/TradingStyleStep';
import { AssetTypesStep } from '@/components/form/AssetTypesStep';
import { PreferredExchangeStep } from '@/components/form/PreferredExchangeStep';
import { ReviewStep } from '@/components/form/ReviewStep';
import { submitQuestionnaire } from '@/services/api';
import { toast } from 'sonner';

const TOTAL_STEPS = 7;

const Questionnaire = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    age_group: null,
    portfolio_size: null,
    yearly_deposit: null,
    trading_style: [],
    asset_types: [],
    preferred_exchange: null,
  });

  // Handlers
  const handleAgeGroupSelect = (option: AgeGroup) => {
    setFormData({ ...formData, age_group: option });
  };

  const handlePortfolioSizeSelect = (option: PortfolioSize) => {
    setFormData({ ...formData, portfolio_size: option });
  };

  const handleYearlyDepositSelect = (option: YearlyDeposit) => {
    setFormData({ ...formData, yearly_deposit: option });
  };

  const handleTradingStyleToggle = (option: TradingStyle) => {
    setFormData({
      ...formData,
      trading_style: formData.trading_style.includes(option)
        ? formData.trading_style.filter(style => style !== option)
        : [...formData.trading_style, option],
    });
  };

  const handleAssetTypeToggle = (option: AssetType) => {
    setFormData({
      ...formData,
      asset_types: formData.asset_types.includes(option)
        ? formData.asset_types.filter(asset => asset !== option)
        : [...formData.asset_types, option],
    });
  };

  const handlePreferredExchangeSelect = (option: PreferredExchange) => {
    setFormData({ ...formData, preferred_exchange: option });
  };

  // Navigation functions
  const nextStep = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      
      // Check if all required fields are filled
      if (!formData.age_group || !formData.portfolio_size || !formData.yearly_deposit || 
          formData.trading_style.length === 0 || formData.asset_types.length === 0 || !formData.preferred_exchange) {
        toast.error("Please fill in all fields before submitting");
        setIsSubmitting(false);
        return;
      }
      
      // Submit to API
      const result = await submitQuestionnaire(formData);
      
      // Store result in localStorage for the results page
      localStorage.setItem('tradar_recommendation', JSON.stringify(result));
      
      // Navigate to results page
      navigate('/results');
      
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      toast.error("There was an error processing your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.age_group;
      case 2:
        return !formData.portfolio_size;
      case 3:
        return !formData.yearly_deposit;
      case 4:
        return formData.trading_style.length === 0;
      case 5:
        return formData.asset_types.length === 0;
      case 6:
        return !formData.preferred_exchange;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
          
          <div className="form-card mb-8">
            {/* Step content */}
            {currentStep === 1 && (
              <AgeGroupStep 
                selectedOption={formData.age_group} 
                onSelect={handleAgeGroupSelect} 
              />
            )}
            
            {currentStep === 2 && (
              <PortfolioSizeStep 
                selectedOption={formData.portfolio_size} 
                onSelect={handlePortfolioSizeSelect} 
              />
            )}
            
            {currentStep === 3 && (
              <YearlyDepositStep 
                selectedOption={formData.yearly_deposit} 
                onSelect={handleYearlyDepositSelect} 
              />
            )}
            
            {currentStep === 4 && (
              <TradingStyleStep 
                selectedOptions={formData.trading_style} 
                onToggle={handleTradingStyleToggle} 
              />
            )}
            
            {currentStep === 5 && (
              <AssetTypesStep 
                selectedOptions={formData.asset_types} 
                onToggle={handleAssetTypeToggle} 
              />
            )}
            
            {currentStep === 6 && (
              <PreferredExchangeStep 
                selectedOption={formData.preferred_exchange} 
                onSelect={handlePreferredExchangeSelect} 
              />
            )}
            
            {currentStep === 7 && (
              <ReviewStep formData={formData} />
            )}
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              <Button 
                variant="outline" 
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < TOTAL_STEPS ? (
                <Button 
                  onClick={nextStep}
                  disabled={isNextDisabled()}
                >
                  Next
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Get Recommendations'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Questionnaire;
