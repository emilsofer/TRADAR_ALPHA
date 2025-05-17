
import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              Welcome to TRADAR. These Terms and Conditions govern your use of our platform and services. 
              By accessing or using TRADAR, you agree to be bound by these Terms.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">2. Platform Description</h2>
            <p className="text-muted-foreground mb-6">
              TRADAR is a platform designed to match Israeli investors with suitable trading platforms based on their preferences and requirements.
              Our service provides recommendations based on the information you provide.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">3. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The recommendations provided by TRADAR are for informational purposes only and do not constitute financial advice.
              We are not responsible for any investment decisions you make based on our recommendations.
              Always conduct your own research and consider consulting with a financial advisor before making investment decisions.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">4. User Obligations</h2>
            <p className="text-muted-foreground mb-6">
              Users of TRADAR agree to provide accurate information when using our questionnaire.
              Misleading or false information may result in inappropriate recommendations.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">5. Privacy Policy</h2>
            <p className="text-muted-foreground mb-6">
              We respect your privacy and are committed to protecting your personal data.
              Please refer to our Privacy Policy for information on how we collect, use, and disclose your personal information.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4 text-foreground">6. Contact Information</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions or concerns regarding these Terms and Conditions, please contact us at info@tradar.io.
            </p>
            
            <p className="text-muted-foreground mt-10">
              Last updated: May 17, 2025
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
