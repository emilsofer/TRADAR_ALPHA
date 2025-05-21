import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recommendation } from '@/types';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import RecommendationCard from '@/components/results/RecommendationCard';
import { ArrowLeft } from 'lucide-react';
import { saveUserResponse } from '@/firebase';

const platformLinks: Record<string, string> = {
  "Meitav Dash": "https://www.meitavdash.co.il/",
  "Altshuler Shaham": "https://www.altshul.co.il/",
  "Interactive Brokers": "https://www.interactivebrokers.com/",
  "eToro": "https://www.etoro.com/",
  "Plus500": "https://www.plus500.com/",
  "Bank Hapoalim": "https://www.bankhapoalim.co.il/",
  "Leumi Bank": "https://www.leumi.co.il/",
  "Mizrahi Tefahot": "https://www.mizrahi-tefahot.co.il/"
};

const Results = () => {
  const navigate = useNavigate();
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedRecommendation = localStorage.getItem('tradar_recommendation');
    const savedFormData = localStorage.getItem('tradar_formData');

    if (savedRecommendation) {
      try {
        const rec = JSON.parse(savedRecommendation);
        setRecommendation(rec);
        console.log("recommendation loaded:", rec);
      } catch (error) {
        console.error('Error parsing recommendation:', error);
      }
    }

    if (savedFormData) {
      try {
        const form = JSON.parse(savedFormData);
        setFormData(form);
        console.log("formData loaded:", form);
      } catch (error) {
        console.error('Error parsing formData:', error);
      }
    }

    if (!savedRecommendation) {
      navigate('/questionnaire');
    }

    setLoading(false);
  }, [navigate]);

  const handleRetake = () => {
    navigate('/questionnaire');
  };

  const handlePlatformClick = async () => {
    try {
      if (!formData || !recommendation) return;

      const platformName = recommendation.Recommended_Platform;
      console.log("handlePlatformClick platformName:", platformName);

      await saveUserResponse(formData, recommendation, platformName);

      const url = platformLinks[platformName] || "https://tradar.co.il";
      window.open(url, "_blank");
    } catch (e) {
      console.error("Error saving click:", e);
    }
  };

  const handleAlternativeClick = async (platformName: string) => {
    try {
      if (formData && recommendation) {
        console.log("handleAlternativeClick platformName:", platformName);
        await saveUserResponse(formData, recommendation, platformName);
      }

      const url = platformLinks[platformName] || "https://tradar.co.il";
      window.open(url, "_blank");
    } catch (e) {
      console.error("Error saving alternative click:", e);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-20 px-4 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Loading your recommendations...</h2>
            <div className="w-16 h-16 border-t-4 border-tradar-600 border-solid rounded-full animate-spin mx-auto"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!recommendation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto py-20 px-4 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">No recommendation found</h2>
            <p className="text-muted-foreground mb-8">
              Please complete the questionnaire to get your personalized recommendation.
            </p>
            <Button onClick={handleRetake} className="bg-tradar-600 hover:bg-tradar-700">Take Questionnaire</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-20 bg-tradar-100">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-tradar-800">
              Your Trading Platform Recommendation
            </h1>
            <p className="text-xl text-tradar-600 max-w-2xl mx-auto">
              Based on your preferences, we've found the best trading platform for your needs.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-display font-bold mb-8 text-tradar-700">Top Recommendations</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecommendationCard
                title="Top Match"
                platform={recommendation.Recommended_Platform}
                description={recommendation.Reasoning}
                isPrimary={true}
                onClick={handlePlatformClick}
              />
              <RecommendationCard
                title="Most Affordable"
                platform={recommendation.Alternative_Options.Most_Affordable_Platform}
                onClick={() =>
                  handleAlternativeClick(recommendation.Alternative_Options.Most_Affordable_Platform)
                }
              />
              <RecommendationCard
                title="Most Accessible"
                platform={recommendation.Alternative_Options.Most_Accessible_Platform}
                onClick={() =>
                  handleAlternativeClick(recommendation.Alternative_Options.Most_Accessible_Platform)
                }
              />
            </div>

            <div className="flex justify-center mt-16">
              <Button
                variant="outline"
                onClick={handleRetake}
                className="flex items-center border-tradar-300 hover:bg-tradar-50 text-tradar-700"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retake Questionnaire
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
