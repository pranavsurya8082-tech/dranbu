import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <span className="w-8 h-px bg-muted-foreground" />
            About Me
          </span>
        </motion.div>
        
        {/* Main text */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              We Integrate,
              <br />
              Collaborate, and
              <br />
              Challenge.
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                We are dedicated educators embracing the transformative power of knowledge to produce solutions that connect, communicate, and inspire.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                With expertise in public administration, gender equality, and sustainable development, our mission is to empower the next generation of civil servants and leaders who will shape India's future.
              </p>
            </div>
            
            <a 
              href="/about" 
              className="inline-flex items-center gap-2 text-foreground font-semibold group"
            >
              Read More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;