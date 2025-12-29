"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BeamPath {
  path: string;
  gradientConfig: {
    initial: {
      x1: string;
      x2: string;
      y1: string;
      y2: string;
    };
    animate: {
      x1: string | string[];
      x2: string | string[];
      y1: string | string[];
      y2: string | string[];
    };
    transition?: {
      duration?: number;
      repeat?: number;
      repeatType?: string;
      ease?: string;
      repeatDelay?: number;
      delay?: number;
    };
  };
  connectionPoints?: Array<{
    cx: number;
    cy: number;
    r: number;
  }>;
}

interface PulseBeamsProps {
  children?: React.ReactNode;
  className?: string;
  background?: React.ReactNode;
  beams: BeamPath[];
  width?: number;
  height?: number;
  baseColor?: string;
  accentColor?: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
}

export const PulseBeams = ({
  children,
  className,
  background,
  beams,
  width = 858,
  height = 434,
  baseColor = "var(--slate-800)",
  accentColor = "var(--slate-600)",
  gradientColors,
}: PulseBeamsProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg",
        className
      )}
    >
      {background}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {children}
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <SVGs
          beams={beams}
          width={width}
          height={height}
          baseColor={baseColor}
          accentColor={accentColor}
          gradientColors={gradientColors}
        />
      </div>
    </div>
  );
};

interface SVGsProps {
  beams: BeamPath[];
  width: number;
  height: number;
  baseColor: string;
  accentColor: string;
  gradientColors?: {
    start: string;
    middle: string;
    end: string;
  };
}

const SVGs = ({ beams, width, height, baseColor, accentColor, gradientColors }: SVGsProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-full w-full"
    >
      {beams.map((beam, index) => (
        <g key={`beam-group-${index}`}>
          <path
            d={beam.path}
            stroke={baseColor}
            strokeWidth="1"
            strokeOpacity="0.2"
          />
          <path
            d={beam.path}
            stroke={`url(#gradient-${index})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          {beam.connectionPoints?.map((point, pointIndex) => (
            <circle
              key={`point-${index}-${pointIndex}`}
              cx={point.cx}
              cy={point.cy}
              r={point.r}
              fill={accentColor}
              fillOpacity="0.3"
              stroke={accentColor}
              strokeWidth="1"
              strokeOpacity="0.5"
            />
          ))}
        </g>
      ))}

      <defs>
        {beams.map((beam, index) => (
          <motion.linearGradient
            key={`gradient-${index}`}
            id={`gradient-${index}`}
            gradientUnits="userSpaceOnUse"
            initial={beam.gradientConfig.initial}
            animate={beam.gradientConfig.animate}
            transition={beam.gradientConfig.transition as any}
          >
            <GradientColors colors={gradientColors} />
          </motion.linearGradient>
        ))}
      </defs>
    </svg>
  );
};

const GradientColors = ({ colors = {
  start: "#18CCFC",
  middle: "#6344F5",
  end: "#AE48FF"
} }: { colors?: { start: string; middle: string; end: string } }) => {
  return (
    <>
      <stop stopColor={colors.start} stopOpacity="0" />
      <stop stopColor={colors.start} />
      <stop offset="0.325" stopColor={colors.middle} />
      <stop offset="1" stopColor={colors.end} stopOpacity="0" />
    </>
  );
};

export default PulseBeams;
