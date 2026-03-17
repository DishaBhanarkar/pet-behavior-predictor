import { Heart, Brain, Zap } from "lucide-react";
import PetPredictorForm from "../components/PetPredictorForm";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary rounded-lg">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">
              Pet Predictor
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#predictor" className="text-foreground hover:text-primary transition-colors">
              Predictor
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="w-full py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <p className="text-sm font-semibold text-primary">
                Powered by Machine Learning
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Understand Your Pet's Needs
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Use advanced machine learning models to predict when your pet will
              be hungry and identify unusual behavior patterns. Keep your
              furry friend happy and healthy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#predictor"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Feature Cards */}
          <div id="features" className="grid md:grid-cols-3 gap-6 mt-20">
            <div className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                ML-Powered
              </h3>
              <p className="text-muted-foreground text-sm">
                Decision tree classifiers trained on pet behavior data for
                accurate predictions
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Instant Results
              </h3>
              <p className="text-muted-foreground text-sm">
                Get real-time predictions based on your pet's current
                conditions and activity level
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg bg-card hover:shadow-md transition-shadow">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Pet Health
              </h3>
              <p className="text-muted-foreground text-sm">
                Monitor and understand your pet's behavior patterns and
                nutritional needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Predictor Section */}
      <section id="predictor" className="w-full py-16 md:py-24">
        <PetPredictorForm />
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Pet Predictor</span>
              </div>
              <p className="text-sm text-muted-foreground">
                ML-powered pet health and behavior prediction platform
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#predictor" className="hover:text-primary transition-colors">
                    Predictor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2024 Pet Predictor. All rights reserved. | Machine learning
              models for pet health prediction
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
