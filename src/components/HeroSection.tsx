import { Instagram, Linkedin, GraduationCap, Target, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative rounded-[2.5rem] overflow-hidden bg-muted my-12 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-6 md:gap-12 p-6 md:p-12 lg:p-16">
        {/* Left side - Image */}
        <div className="relative aspect-[4/3] md:aspect-auto rounded-[2rem] overflow-hidden animate-scale-in">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
            alt="UPSC Preparation and Career Guidance"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          {/* Floating badges */}
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-accent" />
              UPSC Mentor
            </span>
            <span className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
              <Target className="w-4 h-4 text-accent" />
              Career Coach
            </span>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8">
          <div className="space-y-4 md:space-y-6">
            <p className="text-accent font-medium text-sm uppercase tracking-wider animate-slide-down">
              UPSC Preparation & Career Guidance
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight animate-slide-down">
              Your Path to Civil Services Success
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl animate-slide-up stagger-1">
              Ready to guide you through UPSC preparation and career paths. With proven strategies and personalized mentorship, 
              I help aspirants turn their dreams of serving the nation into reality.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6 pt-4 animate-slide-up stagger-2">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-4 md:px-10 md:py-6 text-base font-medium transition-all hover:scale-105 w-full sm:w-auto">
              <a href="/contact">Get Guidance</a>
            </Button>

            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/dranbuarumugam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/AnbuArumugam5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dranbuarumugam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border animate-slide-up stagger-3">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">500+</p>
              <p className="text-sm text-muted-foreground">Students Guided</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary">95%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
