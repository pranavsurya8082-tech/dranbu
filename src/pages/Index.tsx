import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import { BookOpen, Target, Users, Award, ArrowRight } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "UPSC Preparation",
      description: "Comprehensive guidance for Prelims, Mains, and Interview with proven study strategies.",
    },
    {
      icon: Target,
      title: "Career Counselling",
      description: "Strategic career planning to help you choose the right path in civil services.",
    },
    {
      icon: Users,
      title: "Personal Mentorship",
      description: "One-on-one mentoring sessions tailored to your strengths and areas of improvement.",
    },
    {
      icon: Award,
      title: "Mock Interviews",
      description: "Practice sessions with feedback to build confidence for the personality test.",
    },
  ];

  return (
    <div className="min-h-screen bg-background animate-fade-in">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection />

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="text-center mb-12 animate-slide-up">
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">What I Offer</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services & Guidance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div 
                key={service.title} 
                className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="my-20 rounded-[2.5rem] bg-primary p-12 md:p-16 text-center animate-scale-in">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Take the first step towards your UPSC dream. Get personalized guidance and a clear roadmap to success.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-background text-foreground font-medium hover:bg-background/90 hover:scale-105 transition-all"
            >
              Book a Consultation
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
