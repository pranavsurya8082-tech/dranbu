import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from "framer-motion";
import drAnbuFull from "@/assets/dr-anbu-full.png";

const HeroSection = () => {
  return (
    <section className="pt-0 pb-12 md:pb-20 animate-fade-in">
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl overflow-hidden min-h-[500px] md:min-h-[600px]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#3b82f6"
        />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <div className="space-y-6 p-8 md:p-12 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200"
            >
              Dr Anbu Arumugam
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base md:text-lg text-blue-100/70 leading-relaxed max-w-xl"
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
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-base font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25">
                <a href="/contact">Get Started</a>
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/dranbuarumugam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all flex items-center justify-center text-blue-200 hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/AnbuArumugam5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all flex items-center justify-center text-blue-200 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dranbuarumugam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-blue-400/30 hover:border-blue-400 hover:bg-blue-500/20 transition-all flex items-center justify-center text-blue-200 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Animated Person Image */}
          <div className="relative h-[350px] md:h-full min-h-[400px] flex items-end justify-center overflow-hidden">
            {/* Animated glow rings */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-blue-400/20"
                animate={{ 
                  scale: [1, 1.15, 1],
                  opacity: [0.2, 0.05, 0.2]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
            </motion.div>

            {/* Floating particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/60 rounded-full"
                style={{
                  left: `${20 + i * 12}%`,
                  bottom: `${20 + (i % 3) * 20}%`,
                }}
                animate={{
                  y: [-10, -30, -10],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}

            {/* Person Image with 3D effects */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Glow effect behind image */}
                <motion.div
                  className="absolute inset-0 blur-3xl bg-gradient-to-t from-blue-500/40 via-blue-400/20 to-transparent"
                  animate={{
                    opacity: [0.4, 0.7, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Main image */}
                <img
                  src={drAnbuFull}
                  alt="Dr Anbu Arumugam"
                  className="relative z-10 h-[320px] md:h-[480px] w-auto object-contain drop-shadow-2xl"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(59, 130, 246, 0.3))",
                  }}
                />

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut",
                  }}
                  style={{ 
                    maskImage: "linear-gradient(to bottom, transparent, black, transparent)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent, black, transparent)",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Ground glow */}
            <motion.div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[250px] h-[60px] bg-blue-500/30 blur-2xl rounded-full"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scaleX: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
