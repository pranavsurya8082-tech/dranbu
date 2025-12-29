import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const fakeTestimonials = [
  {
    quote:
      "Dr. Anbu's guidance transformed my approach to civil services preparation. His insights on public administration and strategic thinking helped me crack the exam in my first attempt.",
    name: "Priya Sharma",
    designation: "IAS Officer, 2023 Batch",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "The mentorship I received was invaluable. Dr. Anbu's deep understanding of governance and policy-making gave me a unique perspective that set me apart in the interview rounds.",
    name: "Rajesh Kumar",
    designation: "IPS Officer, Tamil Nadu Cadre",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "His research-oriented approach and practical examples made complex topics accessible. Dr. Anbu is not just a teacher but a true mentor who cares about each student's success.",
    name: "Anitha Venkatesh",
    designation: "Research Scholar, JNU",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "Dr. Anbu's expertise in gender equality and social equity opened my eyes to important dimensions of public policy. His classes are always engaging and thought-provoking.",
    name: "Mohammed Faisal",
    designation: "Civil Services Aspirant",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-8">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          What My Students Say
        </h2>
      </div>

      <CircularTestimonials
        testimonials={fakeTestimonials}
        autoplay={true}
        colors={{
          name: "hsl(var(--foreground))",
          designation: "hsl(var(--muted-foreground))",
          testimony: "hsl(var(--muted-foreground))",
          arrowBackground: "hsl(var(--primary))",
          arrowForeground: "hsl(var(--primary-foreground))",
          arrowHoverBackground: "hsl(var(--accent))",
        }}
      />
    </section>
  );
};

export default TestimonialsSection;
