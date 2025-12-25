import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

const UpcomingEventsSection = () => {
  const { data: events = [], isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("published", true)
        .gte("event_date", new Date().toISOString())
        .order("event_date", { ascending: true })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-16 animate-fade-in">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Stay Updated</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Events</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-2xl p-6 animate-pulse">
              <div className="h-40 bg-muted rounded"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  const isEmpty = events.length === 0;

  return (
    <section className="py-16 animate-fade-in">
      <div className="text-center mb-12">
        <p className="text-accent font-medium text-sm uppercase tracking-wider mb-4">Stay Updated</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Events</h2>
      </div>

      {isEmpty ? (
        <div className="text-center py-12 text-muted-foreground">
          <p>No upcoming events scheduled.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up stagger-${Math.min(index + 1, 6)} group`}
            >
              {event.event_type && (
                <div className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full mb-4">
                  {event.event_type}
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              
              <div className="space-y-3 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span>{format(new Date(event.event_date), "MMMM d, yyyy 'at' h:mm a")}</span>
                </div>
                {event.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              
              {event.registration_url ? (
                <Button asChild variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              ) : (
                <Button variant="outline" className="w-full rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default UpcomingEventsSection;
