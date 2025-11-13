import React from "react";

export default function GlowRing({ size = 64, color = "#00F0FF", className = "" }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          boxShadow: `0 0 0 2px ${color}33, 0 0 30px ${color}66, inset 0 0 30px ${color}22`,
        }}
      />
      <div className="absolute inset-[4px] rounded-full bg-[#0B0F1C]" />
    </div>
  );
}
