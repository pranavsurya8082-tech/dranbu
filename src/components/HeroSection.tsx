import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import drAnbuImage from "@/assets/dr-anbu-arumugam.jpeg";

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
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
              Dr Anbu Arumugam
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-neutral-300 leading-relaxed max-w-xl"
            >
              Assistant Professor & Head, Department of Public Administration at Government Arts College, Chennai. With 18+ years of experience in teaching, research, and administration, specializing in gender equality, social equity, and sustainable development.
            </motion.p>

            {/* CTA and Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4"
            >
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
            </motion.div>
          </div>

          {/* Right Column - Photo */}
          <div className="relative h-[350px] md:h-full min-h-[400px] flex items-center justify-center p-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Animated glow ring */}
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px 5px rgba(255,255,255,0.1)",
                    "0 0 40px 10px rgba(255,255,255,0.2)",
                    "0 0 20px 5px rgba(255,255,255,0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full"
              />
              
              {/* Photo container with hover effect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                  <motion.img
                    src={drAnbuImage}
                    alt="Dr Anbu Arumugam"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                
                {/* Floating particles effect */}
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-white/10 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [5, -5, 5],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-white/10 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [-3, 3, -3],
                    x: [3, -3, 3],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-6 w-4 h-4 bg-white/10 rounded-full blur-sm"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
