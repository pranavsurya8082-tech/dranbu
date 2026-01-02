import { motion } from "framer-motion";
import { useState } from "react";

interface Location {
  name: string;
  x: number;
  y: number;
}

const locations: Location[] = [
  { name: "USA", x: 21, y: 38 },
  { name: "Portugal", x: 44, y: 38 },
  { name: "Netherlands", x: 50, y: 32 },
  { name: "Sri Lanka", x: 68, y: 55 },
  { name: "Malaysia", x: 74, y: 58 },
  { name: "China", x: 76, y: 40 },
  { name: "Singapore", x: 74, y: 60 },
  { name: "Bangladesh", x: 71, y: 46 },
];

const WorldMap = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full">
      {/* Map Container */}
      <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 via-background to-primary/10 border border-border/50">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* World Map SVG */}
        <svg
          viewBox="0 0 100 50"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Simplified world continents */}
          <g className="fill-muted-foreground/10 stroke-muted-foreground/30" strokeWidth="0.2">
            {/* North America */}
            <path d="M5,15 Q10,10 20,12 L25,18 Q22,25 18,30 L12,32 Q5,28 5,20 Z" />
            {/* South America */}
            <path d="M20,40 Q25,35 28,38 L30,50 Q25,55 22,50 L18,45 Z" />
            {/* Europe */}
            <path d="M45,20 Q50,18 55,22 L54,30 Q50,32 46,28 Z" />
            {/* Africa */}
            <path d="M48,35 Q55,32 58,38 L56,52 Q50,55 48,48 Z" />
            {/* Asia */}
            <path d="M60,18 Q75,15 85,22 L88,35 Q80,42 70,38 L62,30 Z" />
            {/* Australia */}
            <path d="M78,48 Q85,46 88,50 L86,56 Q80,58 78,54 Z" />
          </g>

          {/* Connection lines from India (center point) to visited countries */}
          <g className="stroke-primary/30" strokeWidth="0.15" fill="none">
            {locations.map((location, index) => (
              <motion.path
                key={`line-${location.name}`}
                d={`M70,45 Q${(70 + location.x) / 2},${Math.min(location.y, 45) - 10} ${location.x},${location.y}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.6 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                strokeDasharray="2,1"
              />
            ))}
          </g>

          {/* India marker (home base) */}
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <circle cx="70" cy="45" r="2" className="fill-primary/30" />
            <circle cx="70" cy="45" r="1" className="fill-primary" />
            <motion.circle
              cx="70"
              cy="45"
              r="2.5"
              className="stroke-primary fill-none"
              strokeWidth="0.3"
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </motion.g>

          {/* Location pins */}
          {locations.map((location, index) => (
            <motion.g
              key={location.name}
              initial={{ scale: 0, opacity: 0, y: -5 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.15,
                type: "spring",
                stiffness: 200,
              }}
              onMouseEnter={() => setHoveredLocation(location.name)}
              onMouseLeave={() => setHoveredLocation(null)}
              className="cursor-pointer"
            >
              {/* Pin shadow */}
              <ellipse
                cx={location.x}
                cy={location.y + 1.5}
                rx="1"
                ry="0.4"
                className="fill-foreground/10"
              />
              
              {/* Pin body */}
              <motion.path
                d={`M${location.x},${location.y - 3} 
                   c0,-1.5 -1.2,-2.5 -1.2,-2.5 
                   a1.5,1.5 0 1,1 2.4,0 
                   c0,0 -1.2,1 -1.2,2.5`}
                className="fill-primary"
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              
              {/* Pin dot */}
              <circle
                cx={location.x}
                cy={location.y - 4.5}
                r="0.6"
                className="fill-primary-foreground"
              />

              {/* Pulse effect */}
              <motion.circle
                cx={location.x}
                cy={location.y}
                r="1.5"
                className="stroke-primary fill-none"
                strokeWidth="0.2"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2.5, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              />
            </motion.g>
          ))}
        </svg>

        {/* Floating labels */}
        {locations.map((location, index) => (
          <motion.div
            key={`label-${location.name}`}
            className="absolute pointer-events-none"
            style={{
              left: `${location.x}%`,
              top: `${location.y - 8}%`,
              transform: "translate(-50%, -100%)",
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: hoveredLocation === location.name ? 1 : 0.8,
              y: 0,
              scale: hoveredLocation === location.name ? 1.1 : 1,
            }}
            transition={{ 
              duration: 0.3, 
              delay: 1 + index * 0.1,
            }}
          >
            <span className={`
              text-[10px] sm:text-xs font-medium px-2 py-1 rounded-full
              bg-background/90 backdrop-blur-sm border border-border/50 shadow-sm
              whitespace-nowrap
              ${hoveredLocation === location.name ? 'text-primary' : 'text-foreground'}
            `}>
              {location.name}
            </span>
          </motion.div>
        ))}

        {/* Legend */}
        <motion.div 
          className="absolute bottom-4 left-4 flex items-center gap-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2 }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>India (Home)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-primary/60" />
            <span>Visited</span>
          </div>
        </motion.div>

        {/* Stats overlay */}
        <motion.div 
          className="absolute top-4 right-4 text-right bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <div className="text-2xl font-bold text-primary">{locations.length}</div>
          <div className="text-xs text-muted-foreground">Countries</div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorldMap;
