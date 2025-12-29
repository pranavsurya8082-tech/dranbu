import { Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline";
import { motion } from "framer-motion";
import drAnbuImage from "@/assets/dr-anbu-arumugam.jpeg";

const HeroSection = () => {
  return (
    <section className="py-12 md:py-20 animate-fade-in">
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl overflow-hidden min-h-[500px] md:min-h-[600px]">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#3b82f6"
        />
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <div className="space-y-6 p-8 md:p-12 relative z-10">
            {/* Photo badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-4 mb-2"
            >
              <div className="relative">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 15px 3px rgba(59,130,246,0.3)",
                      "0 0 25px 5px rgba(59,130,246,0.5)",
                      "0 0 15px 3px rgba(59,130,246,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-400/50"
                >
                  <img
                    src={drAnbuImage}
                    alt="Dr Anbu Arumugam"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900"
                />
              </div>
              <div>
                <p className="text-blue-300 text-sm font-medium">Welcome to</p>
                <p className="text-white/80 text-xs">Your Learning Journey</p>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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

          {/* Right Column - 3D Robot with Photo Overlay */}
          <div className="relative h-[350px] md:h-full min-h-[400px]">
            {/* Spline Robot */}
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
            
            {/* Floating Photo Frame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20"
            >
              <motion.div
                animate={{ 
                  y: [-5, 5, -5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden border-2 border-blue-400/50 shadow-xl shadow-blue-500/20 bg-slate-900/80 backdrop-blur-sm">
                  <img
                    src={drAnbuImage}
                    alt="Dr Anbu Arumugam"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 10px 2px rgba(59,130,246,0.3)",
                      "0 0 20px 4px rgba(59,130,246,0.5)",
                      "0 0 10px 2px rgba(59,130,246,0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-xl"
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
