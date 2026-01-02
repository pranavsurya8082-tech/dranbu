import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden min-h-screen flex flex-col">
      {/* Integrated Header */}
      <Header variant="transparent" />
      
      {/* Aurora gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Main aurora gradient - blue/purple at top */}
        <div 
          className="absolute top-0 left-0 right-0 h-[70%]"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(217 80% 30% / 0.5) 0%, hsl(240 70% 25% / 0.3) 30%, transparent 70%)",
          }}
        />
        {/* Left purple accent */}
        <div 
          className="absolute top-0 left-0 w-[50%] h-[60%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 0% 0%, hsl(270 60% 35% / 0.3) 0%, transparent 50%)",
          }}
        />
        {/* Right blue accent */}
        <div 
          className="absolute top-0 right-0 w-[50%] h-[60%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 100% 20%, hsl(200 70% 35% / 0.25) 0%, transparent 50%)",
          }}
        />
      </div>
      
      {/* Grid mesh at bottom right */}
      <div className="absolute bottom-0 right-0 w-[60%] h-[50%] z-[1] opacity-30 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 400 300"
          className="w-full h-full"
          preserveAspectRatio="xMaxYMax slice"
        >
          <defs>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(217 70% 50%)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="hsl(270 60% 50%)" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(200 70% 50%)" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Perspective grid lines - horizontal */}
          {[...Array(15)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={50 + i * 20}
              x2="400"
              y2={150 + i * 10}
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
            />
          ))}
          {/* Perspective grid lines - vertical */}
          {[...Array(20)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={200 + (i - 10) * 30}
              y1="0"
              x2={200 + (i - 10) * 40}
              y2="300"
              stroke="url(#gridGradient)"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white max-w-4xl"
        >
          Guiding civil service
          <br />
          aspirants, shaping
          <br />
          future leaders.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-xl"
        >
          An educator based in Chennai committed to transforming aspirants into achievers.
          <br />
          Meet Dr. Anbu Arumugam, guiding success for 18+ years.
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-10"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white font-medium rounded-full transition-all hover:bg-white/10 hover:border-white/50"
          >
            Let's connect
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;