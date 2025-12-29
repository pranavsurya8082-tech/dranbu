import { Alert, AlertTitle, AlertDescription, AlertContent } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Radio, X } from "lucide-react";
import { useState } from "react";
import { formatDistanceToNow, format } from "date-fns";

interface LiveEventAlertProps {
  event: {
    id: string;
    title: string;
    event_date: string;
    registration_url?: string | null;
  };
  onClose?: () => void;
}

const LiveEventAlert = ({ event, onClose }: LiveEventAlertProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const eventDate = new Date(event.event_date);
  const timeUntil = formatDistanceToNow(eventDate, { addSuffix: false });
  const formattedDate = format(eventDate, "MMMM d 'at' h:mm a");

  const handleClose = () => {
    setDismissed(true);
    onClose?.();
  };

  return (
    <Alert
      variant="default"
      size="lg"
      layout="complex"
      className="bg-card border-accent/30"
      icon={
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Radio className="opacity-80" size={16} strokeWidth={2} />
        </span>
      }
      action={
        <Button
          variant="ghost"
          size="icon"
          className="opacity-60 hover:opacity-100 transition-opacity"
          onClick={handleClose}
        >
          <X size={16} />
        </Button>
      }
    >
      <AlertContent>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <AlertTitle className="text-sm font-medium">
              Live in {timeUntil}
            </AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground">
              {formattedDate}
            </AlertDescription>
          </div>
          {event.registration_url && (
            <Button size="sm" asChild>
              <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                Notify me
              </a>
            </Button>
          )}
        </div>
      </AlertContent>
    </Alert>
  );
};

export default LiveEventAlert;
