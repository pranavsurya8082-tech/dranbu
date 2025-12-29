import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline";
import { Spotlight } from "@/components/ui/spotlight";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="relative bg-black/[0.96] rounded-2xl overflow-hidden min-h-[500px] md:min-h-[600px]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <div className="space-y-6 p-8 md:p-12 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 animate-slide-down">
              Dr Anbu Arumugam
            </h1>
            
            <p className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl animate-slide-up stagger-1">
              Assistant Professor & Head, Department of Public Administration at Government Arts College, Chennai. With 18+ years of experience in teaching, research, and administration, specializing in gender equality, social equity, and sustainable development.
            </p>

            {/* CTA and Social Links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4 animate-slide-up stagger-2">
              <Button asChild className="bg-white hover:bg-white/90 text-black px-8 py-6 text-base font-medium transition-all hover:scale-105">
                <a href="/contact">Get Started</a>
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/dranbuarumugam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-neutral-700 hover:border-white hover:bg-neutral-800 transition-all flex items-center justify-center text-neutral-300 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/AnbuArumugam5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-neutral-700 hover:border-white hover:bg-neutral-800 transition-all flex items-center justify-center text-neutral-300 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dranbuarumugam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-neutral-700 hover:border-white hover:bg-neutral-800 transition-all flex items-center justify-center text-neutral-300 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Scene */}
          <div className="relative h-[300px] md:h-full min-h-[400px]">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
