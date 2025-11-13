import React from "react";
import { Home, Trophy, Dumbbell, Users, Settings } from "lucide-react";

const Item = ({ icon: Icon, label, active = false }) => (
  <button
    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-2xl transition-colors ${
      active ? "text-white" : "text-cyan-200/70 hover:text-cyan-100"
    }`}
  >
    <div
      className={`rounded-2xl p-2 ${
        active
          ? "bg-gradient-to-r from-[#00F0FF] to-[#4EFA9E] text-[#0B0F1C]"
          : "bg-white/0 border border-cyan-300/20"
      }`}
    >
      <Icon size={20} />
    </div>
    <span className="text-xs">{label}</span>
  </button>
);

export default function BottomNav({ active = "home" }) {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-xl rounded-[24px] bg-[#0B0F1C]/70 border border-cyan-400/20 backdrop-blur-xl shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_20px_60px_rgba(0,0,0,0.45)] px-3 py-2 flex items-center justify-between z-20">
      <Item icon={Home} label="Home" active={active === "home"} />
      <Item icon={Trophy} label="Journey" active={active === "journey"} />
      <Item icon={Dumbbell} label="Fitness" active={active === "fitness"} />
      <Item icon={Users} label="Community" active={active === "community"} />
      <Item icon={Settings} label="Settings" active={active === "settings"} />
    </nav>
  );
}
