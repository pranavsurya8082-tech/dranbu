import { Warp } from "@paper-design/shaders-react";

interface WarpShaderBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export default function WarpShaderBackground({ children, className }: WarpShaderBackgroundProps) {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden ${className || ''}`}>
      {/* Shader Background */}
      <div className="absolute inset-0 -z-10">
        <Warp
          speed={0.3}
          scale={1.2}
          colors={["#0369a1", "#0284c7", "#0ea5e9", "#38bdf8", "#7dd3fc"]}
          distortion={0.5}
          swirl={0.4}
          swirlIterations={8}
          softness={0.8}
          shape="edge"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

export { WarpShaderBackground };
