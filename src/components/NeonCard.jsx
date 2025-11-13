import React from "react";

export default function NeonCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-[24px] bg-[#0B0F1C]/60 border border-cyan-400/20 shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
