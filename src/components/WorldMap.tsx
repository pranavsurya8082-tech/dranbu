import { motion } from "framer-motion";
import { useState } from "react";
import worldMapImage from "@/assets/world-map.jpeg";

interface Location {
  name: string;
  x: number;
  y: number;
}

const locations: Location[] = [
  { name: "USA", x: 18, y: 40 },
  { name: "Portugal", x: 42, y: 38 },
  { name: "Netherlands", x: 48, y: 32 },
  { name: "Sri Lanka", x: 70, y: 58 },
  { name: "Malaysia", x: 76, y: 62 },
  { name: "China", x: 78, y: 38 },
  { name: "Singapore", x: 76, y: 65 },
  { name: "Bangladesh", x: 72, y: 48 },
];

const WorldMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative w-full overflow-hidden rounded-2xl border border-border/50 shadow-lg">
        {/* World Map Image */}
        <img 
          src={worldMapImage} 
          alt="World Map showing international experience locations"
          className="w-full h-auto"
        />

        {/* Overlay for pins */}
        <div className="absolute inset-0">
          {/* Location pins */}
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              className="absolute cursor-pointer"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
                transform: "translate(-50%, -100%)",
              }}
              initial={{ scale: 0, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
              onMouseEnter={() => setHoveredLocation(location.name)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              {/* Pin with drop shadow */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {/* Pin shadow */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-1 bg-black/30 rounded-full blur-sm" />
                
                {/* Pin icon */}
                <svg
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                  className="drop-shadow-lg"
                >
                  <defs>
                    <linearGradient id={`pinGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--primary) / 0.8)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z"
                    fill={`url(#pinGradient-${index})`}
                  />
                  <circle cx="12" cy="12" r="5" fill="white" />
                </svg>

                {/* Pulse effect */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 border-primary"
                  initial={{ scale: 1, opacity: 0.8 }}
                  animate={{ scale: 2.5, opacity: 0 }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* Label tooltip */}
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 -top-2 pointer-events-none"
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: hoveredLocation === location.name ? 1 : 0,
                  y: hoveredLocation === location.name ? 0 : 5,
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground text-background whitespace-nowrap shadow-lg">
                  {location.name}
                </span>
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
              </motion.div>
            </motion.div>
          ))}

          {/* India marker (home base) */}
          <motion.div
            className="absolute cursor-pointer"
            style={{
              left: "68%",
              top: "52%",
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              {/* Outer ring */}
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-primary/40 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>
              
              {/* Animated pulse rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-primary"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                  ease: "easeOut",
                }}
              />

              {/* Home label */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <span className="text-xs font-bold text-primary whitespace-nowrap bg-background/90 px-2 py-0.5 rounded shadow-sm">
                  India
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Legend */}
        <motion.div 
          className="absolute bottom-4 left-4 flex items-center gap-4 text-xs text-foreground bg-background/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50 shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="font-medium">India (Home)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg width="12" height="16" viewBox="0 0 24 32">
              <path
                d="M12 0C5.373 0 0 5.373 0 12c0 9 12 20 12 20s12-11 12-20c0-6.627-5.373-12-12-12z"
                fill="hsl(var(--primary))"
              />
              <circle cx="12" cy="12" r="5" fill="white" />
            </svg>
            <span className="font-medium">Visited</span>
          </div>
        </motion.div>

        {/* Stats overlay */}
        <motion.div 
          className="absolute top-4 right-4 text-right bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50 shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <div className="text-2xl font-bold text-primary">{locations.length}</div>
          <div className="text-xs text-muted-foreground font-medium">Countries</div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldMap;
