import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import booksImage from "@/assets/books-stack.png";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column - Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-slide-down">
            Dr Anbu Arumugam
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl animate-slide-up stagger-1">
            Dr Anbu Arumugam shares daily UPSC tips, guidance, and updates to streamline your preparation and stay motivated on the journey toward civil service.
          </p>

          {/* CTA and Social Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 animate-slide-up stagger-2">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium transition-all hover:scale-105">
              <a href="/contact">Get Started</a>
            </Button>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/dranbuarumugam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/AnbuArumugam5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/dranbuarumugam"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-border hover:border-primary hover:bg-muted transition-all flex items-center justify-center"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative animate-scale-in">
          <img
            src={booksImage}
            alt="UPSC Preparation Books"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
