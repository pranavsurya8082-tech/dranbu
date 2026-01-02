import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredWork = [
  {
    id: 1,
    title: "UPSC Coaching",
    subtitle: "Comprehensive preparation for civil services examinations",
    description: "A structured approach to UPSC preparation, providing in-depth analysis of syllabus, strategic study plans, and personalized mentorship. Our students consistently achieve top ranks with our proven methodology.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
    link: "/contact",
    bgColor: "from-slate-900 via-blue-950 to-slate-900",
  },
  {
    id: 2,
    title: "Research Guidance",
    subtitle: "Academic research and publication support",
    description: "Expert guidance for doctoral and post-doctoral research in public administration, policy studies, and governance. We help scholars navigate the complexities of academic research and achieve publication success.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop",
    link: "/contact",
    bgColor: "from-slate-800 via-slate-900 to-slate-950",
  },
  {
    id: 3,
    title: "Career Mentorship",
    subtitle: "Personalized career development programs",
    description: "One-on-one mentorship sessions designed to help aspiring civil servants and professionals chart their career path. We provide strategic advice, interview preparation, and ongoing support for career growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    link: "/contact",
    bgColor: "from-blue-950 via-slate-900 to-slate-950",
  },
];

const FeaturedWorkSection = () => {
  return (
    <section className="py-0">
      {/* Section header */}
      <div className="py-16 px-6 md:px-12 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between"
          >
            <span className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
              <span className="w-8 h-px bg-muted-foreground" />
              Our Services
            </span>
          </motion.div>
        </div>
      </div>
      
      {/* Featured items */}
      {featuredWork.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative min-h-[80vh] md:min-h-[90vh] flex items-center bg-gradient-to-br ${item.bgColor} overflow-hidden`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
          </div>
          
          {/* Large background text */}
          <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.08, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-[15vw] md:text-[12vw] font-bold text-white whitespace-nowrap"
            >
              {item.title}
            </motion.h2>
          </div>
          
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-20 w-full">
            <div className="max-w-2xl">
              {/* Image preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-64 md:w-80 h-40 md:h-48 object-cover rounded-xl shadow-2xl"
                />
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-blue-200/80 text-sm uppercase tracking-wider mb-4"
              >
                {item.subtitle}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl"
              >
                "{item.description}"
              </motion.p>
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                href={item.link}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default FeaturedWorkSection;