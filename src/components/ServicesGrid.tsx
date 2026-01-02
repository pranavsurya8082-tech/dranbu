import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "UPSC Coaching", icon: "→" },
  { name: "Research Guidance", icon: "→" },
  { name: "Career Mentorship", icon: "→" },
  { name: "Interview Prep", icon: "→" },
  { name: "Study Materials", icon: "→" },
  { name: "Workshops", icon: "→" },
];

const ServicesGrid = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
            <span className="w-8 h-px bg-muted-foreground" />
            All Services
          </span>
        </motion.div>
        
        {/* Services grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.a
              key={service.name}
              href="/contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between p-6 md:p-8 border border-border rounded-2xl hover:bg-muted/50 hover:border-primary/30 transition-all duration-300"
            >
              <span className="flex items-center gap-3">
                <span className="text-accent text-lg">{service.icon}</span>
                <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.name}
                </span>
              </span>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;