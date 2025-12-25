import { Heart, Sparkles } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-accent">Welcome</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Hello, I'm <span className="text-primary">Dr. Anbu Arumugam</span>
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          As a passionate UPSC mentor, public speaker, and author, I'm dedicated to empowering aspiring civil servants 
          with the knowledge, strategies, and confidence they need to succeed. My mission is to make quality guidance 
          accessible to every determined aspirant.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-muted-foreground pt-4">
          <Heart className="w-5 h-5 text-primary fill-primary" />
          <span className="text-sm">Committed to your success journey</span>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
