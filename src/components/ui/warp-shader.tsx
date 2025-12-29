import { Warp } from "@paper-design/shaders-react";

interface WarpShaderBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function WarpShaderBackground({ children, className }: WarpShaderBackgroundProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden bg-sky-950 ${className || ''}`}>
      {/* Shader Background */}
      <div className="pointer-events-none absolute inset-0">
        <Warp
          speed={0.2}
          scale={1}
          rotation={0}
          colors={["#0c4a6e", "#0369a1", "#0284c7", "#0ea5e9", "#38bdf8"]}
          distortion={0.6}
          swirl={0.5}
          swirlIterations={10}
          softness={1}
          proportion={0.5}
          shape="edge"
          shapeScale={1}
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export { WarpShaderBackground };
