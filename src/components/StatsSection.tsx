import { motion } from "framer-motion";

const stats = [
  { value: "18+", label: "Years Experience" },
  { value: "500+", label: "Students Mentored" },
  { value: "50+", label: "Research Papers" },
  { value: "15+", label: "Awards Received" },
];

const StatsSection = () => {
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 border-t border-b border-border bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="flex items-baseline gap-1 justify-center md:justify-start">
                <span className="text-xs text-muted-foreground">•</span>
                <span className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;