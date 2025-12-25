import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const UpcomingEventsSection = () => {
  const events = [
    {
      title: "UPSC Strategy Masterclass",
      date: "January 15, 2025",
      time: "10:00 AM - 1:00 PM",
      location: "Online Webinar",
      type: "Webinar",
    },
    {
      title: "Answer Writing Workshop",
      date: "January 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "Chennai, Tamil Nadu",
      type: "Workshop",
    },
    {
      title: "Mock Interview Sessions",
      date: "February 5, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Delhi NCR",
      type: "In-Person",
    },
  ];

  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Stay Updated</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Events</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <div
            key={event.title}
            className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)} group`}
          >
            <div className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full mb-4">
              {event.type}
            </div>
            
            <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
              {event.title}
            </h3>
            
            <div className="space-y-3 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
              Register Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
