import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import ResourcesSection from "@/components/ResourcesSection";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Welcome Message */}
        <WelcomeSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Upcoming Events Section */}
        <UpcomingEventsSection />

        {/* Resources Section */}
        <ResourcesSection />

        {/* CTA Section */}
        <section className="my-20 py-16 border-t border-b border-border text-center animate-fade-in">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Begin Your Preparation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Get personalized guidance and a strategic roadmap for your civil services journey.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
                <li><a href="/about" className="hover:text-accent transition-colors">About Me</a></li>
                <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><span className="hover:text-accent transition-colors">UPSC Coaching</span></li>
                <li><span className="hover:text-accent transition-colors">Career Guidance</span></li>
                <li><span className="hover:text-accent transition-colors">Mentorship</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 Dr Anbu Arumugam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
