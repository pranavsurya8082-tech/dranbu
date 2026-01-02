import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative bg-slate-950 overflow-hidden min-h-[85vh] md:min-h-[90vh] flex flex-col">
      {/* Aurora gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Primary aurora gradient */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[60%]"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(217 70% 35% / 0.6) 0%, hsl(217 80% 25% / 0.3) 40%, transparent 70%)",
          }}
        />
        {/* Secondary glow */}
        <div 
          className="absolute top-0 left-1/4 w-[60%] h-[40%]"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 30% 0%, hsl(250 60% 45% / 0.3) 0%, transparent 60%)",
          }}
        />
        {/* Accent glow right */}
        <div 
          className="absolute top-10 right-0 w-[40%] h-[30%]"
          style={{
            background: "radial-gradient(ellipse 80% 80% at 100% 0%, hsl(200 70% 40% / 0.2) 0%, transparent 60%)",
          }}
        />
      </div>
      
      {/* Decorative orbital rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
        >
          {/* Outer ring */}
          <div className="absolute inset-0 border border-white/10 rounded-full" />
          {/* Middle ring */}
          <div className="absolute inset-12 border border-white/5 rounded-full" />
          {/* Inner ring */}
          <div className="absolute inset-24 border border-white/5 rounded-full" />
          
          {/* Orbiting dots */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-400/40 rounded-full" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-12"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/30 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 md:px-12 py-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white max-w-5xl"
        >
          Guiding futures,
          <br />
          shaping leaders,
          <br />
          and experience.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-8 text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl"
        >
          Dr. Anbu Arumugam is an acclaimed educator and mentor. With 18+ years of experience in public administration, we empower civil service aspirants to achieve their dreams through strategic guidance and personalized mentorship.
        </motion.p>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;