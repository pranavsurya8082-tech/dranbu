import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react";

const ContactCTASection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-muted/30 relative overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.03, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[20vw] md:text-[15vw] font-bold text-foreground whitespace-nowrap leading-none translate-y-1/4"
        >
          Connect
        </motion.span>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
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
            Get In Touch
          </span>
        </motion.div>
        
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-12"
        >
          Good things will happen
          <br />
          when you say{" "}
          <span className="text-accent">"Hello!"</span>
        </motion.h2>
        
        {/* Contact info grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Email</span>
            </div>
            <a href="mailto:dranbuarumugam@gmail.com" className="text-lg font-medium hover:text-accent transition-colors">
              dranbuarumugam@gmail.com
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Location</span>
            </div>
            <p className="text-lg font-medium">
              Chennai, Tamil Nadu, India
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Phone</span>
            </div>
            <p className="text-lg font-medium">
              Contact for details
            </p>
          </motion.div>
        </div>
        
        {/* CTA button and social links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg"
          >
            Schedule a Consultation
            <span aria-hidden="true">→</span>
          </motion.a>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://www.instagram.com/dranbuarumugam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/AnbuArumugam5"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/dranbuarumugam"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all flex items-center justify-center text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTASection;