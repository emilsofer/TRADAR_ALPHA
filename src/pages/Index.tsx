
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                Find Your <span className="gradient-text">Perfect</span> Trading Platform
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
                TRADAR matches Israeli investors to the best trading platform based on your unique investment style and needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="px-8">
                  <Link to="/questionnaire">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#how-it-works">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-tradar-100/50 to-transparent rounded-full transform translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-secondary">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                How TRADAR Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our smart algorithm analyzes your investment preferences to find the perfect trading platform match.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-tradar-100 text-tradar-800 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  1
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Complete the Questionnaire</h3>
                <p className="text-muted-foreground">
                  Answer 6 simple questions about your investment style, preferences, and goals.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-tradar-100 text-tradar-800 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  2
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Get Matched</h3>
                <p className="text-muted-foreground">
                  Our algorithm analyzes your answers and matches you with the best trading platform.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-card">
                <div className="w-12 h-12 bg-tradar-100 text-tradar-800 rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  3
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Start Trading</h3>
                <p className="text-muted-foreground">
                  Review your personalized recommendations and start your investment journey.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild>
                <Link to="/questionnaire">Find Your Platform</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose TRADAR Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Why Choose TRADAR
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We take the guesswork out of choosing a trading platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="p-8 border rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4">Personalized Recommendations</h3>
                <p className="text-muted-foreground">
                  Get trading platform suggestions tailored to your specific needs and investment style.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="p-8 border rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4">Israeli Market Focus</h3>
                <p className="text-muted-foreground">
                  Specialized recommendations for the Israeli market and international exchanges.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="p-8 border rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4">Unbiased Analysis</h3>
                <p className="text-muted-foreground">
                  Our recommendations are based on data, not commissions or partnerships.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="p-8 border rounded-2xl">
                <h3 className="text-xl font-display font-bold mb-4">Alternative Options</h3>
                <p className="text-muted-foreground">
                  We provide multiple alternatives so you can compare different platforms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-tradar-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to find your perfect trading platform?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Take our short questionnaire and get matched with the best trading platform for your needs.
            </p>
            <Button size="lg" asChild className="px-8">
              <Link to="/questionnaire">
                Start Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
