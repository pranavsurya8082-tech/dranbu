import AnimatedShaderBackground from "@/components/ui/animated-shader-background";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden min-h-[70vh] md:min-h-[80vh] flex items-center justify-center">
      {/* Animated Shader Background */}
      <AnimatedShaderBackground className="absolute inset-0 z-0 opacity-50" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-slate-900/80 z-[1]" />
      
      {/* Navigation hint at top */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-center px-6 md:px-12 py-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-blue-200/60 text-sm font-medium"
        >
          <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mr-2" />
          Chennai, India
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-[2] text-center px-6 md:px-12 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
        >
          Guiding futures,
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-400">
            shaping leaders,
          </span>
          <br />
          and inspiring change.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto mb-8"
        >
          Dr. Anbu Arumugam empowers civil service aspirants with 18+ years of academic excellence in public administration, research, and mentorship.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-white/20"
          >
            Free Consultation
            <span aria-hidden="true">→</span>
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-medium rounded-full transition-all hover:bg-white/10"
          >
            Learn More
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;