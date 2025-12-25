import { Star, Quote } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

const TestimonialsSection = () => {
  const { data: testimonials = [], isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 animate-fade-in">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What My Students Say</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-2xl p-6 animate-pulse">
              <div className="h-32 bg-muted rounded mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const isEmpty = testimonials.length === 0;

  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What My Students Say</h2>
      </div>

      {isEmpty ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No testimonials yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)}`}
            >
              <Quote className="w-10 h-10 text-accent/20 mb-4" />
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                {testimonial.role && (
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;
