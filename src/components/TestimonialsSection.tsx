import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "IAS Officer, 2023 Batch",
      content: "Dr. Anbu's mentorship was instrumental in my UPSC journey. Her strategic approach and constant motivation helped me crack the exam in my second attempt.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "IPS Officer, 2022 Batch",
      content: "The personalized guidance and mock interviews prepared me thoroughly for the personality test. Forever grateful for the mentorship.",
      rating: 5,
    },
    {
      name: "Ananya Reddy",
      role: "IFS Officer, 2023 Batch",
      content: "Her books and speaking sessions gave me clarity on answer writing. The structured approach made complex topics simple to understand.",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What My Students Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)}`}
          >
            <Quote className="w-10 h-10 text-accent/20 mb-4" />
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            
            <div className="border-t border-border pt-4">
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
