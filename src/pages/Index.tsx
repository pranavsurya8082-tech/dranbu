import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import FeaturedWorkSection from "@/components/FeaturedWorkSection";
import ServicesGrid from "@/components/ServicesGrid";
import ContactCTASection from "@/components/ContactCTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main>
        {/* Hero Section - Full width dark with aurora */}
        <HeroSection />

        {/* About Section - White background with large typography */}
        <AboutSection />

        {/* Stats Section - Horizontal metrics bar */}
        <StatsSection />

        {/* Featured Work Section - Dark showcase sections */}
        <FeaturedWorkSection />

        {/* Services Grid - Clean grid of services */}
        <ServicesGrid />

        {/* Contact CTA Section - Bottom call to action */}
        <ContactCTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
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