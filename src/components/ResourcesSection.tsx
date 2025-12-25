import { FileText, Video, Download, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResourcesSection = () => {
  const resources = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Comprehensive notes and guides for all UPSC subjects",
      count: "50+ Resources",
    },
    {
      icon: Video,
      title: "Video Lectures",
      description: "In-depth video explanations of complex topics",
      count: "100+ Videos",
    },
    {
      icon: FileText,
      title: "Previous Papers",
      description: "Solved question papers with detailed analysis",
      count: "20+ Years",
    },
    {
      icon: Download,
      title: "Free Downloads",
      description: "PDFs, checklists, and study planners",
      count: "30+ Downloads",
    },
  ];

  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Free Resources</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Learning Resources</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <div
            key={resource.title}
            className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)} group cursor-pointer`}
          >
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              <resource.icon className="w-6 h-6 text-accent group-hover:text-primary-foreground" />
            </div>
            
            <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{resource.description}</p>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-accent">{resource.count}</span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button asChild className="rounded-full px-8">
          <a href="/resources">
            Explore All Resources
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ResourcesSection;
