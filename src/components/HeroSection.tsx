import { Instagram, Linkedin, Twitter } from "lucide-react";
import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-0 pb-12 md:pb-20 animate-fade-in">
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl overflow-hidden min-h-[500px] md:min-h-[600px]">
        {/* Animated Shader Background */}
        <AnimatedShaderBackground className="absolute inset-0 z-0 opacity-60" />
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-blue-950/30 to-slate-900/50 z-[1]" />
        
        <div className="flex items-center justify-center min-h-[500px] md:min-h-[600px] relative z-[2]">
          {/* Content */}
          <div className="space-y-6 p-8 md:p-12 flex flex-col justify-center items-center text-center relative z-10 max-w-3xl">
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all hover:scale-105"
              >
                Free Consultation
                <span aria-hidden="true">→</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-3 pt-4"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
