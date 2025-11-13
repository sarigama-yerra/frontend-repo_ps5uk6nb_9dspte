import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, ShieldCheck, Camera, Timer, QrCode, Coins, Dumbbell } from "lucide-react";
import Button from "./components/Button";
import NeonCard from "./components/NeonCard";
import GlowRing from "./components/GlowRing";
import BottomNav from "./components/BottomNav";
import Confetti from "./components/Confetti";

const bg = "bg-[#0B0F1C] text-cyan-100";
const neonText = "bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] via-[#4EFA9E] to-[#9B6BFF]";

function Splash({ onNext }) {
  return (
    <div className={`min-h-screen ${bg} relative overflow-hidden`}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1C]/30 via-[#0B0F1C]/60 to-[#0B0F1C] pointer-events-none" />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className={`text-4xl sm:text-6xl font-extrabold drop-shadow-lg ${neonText}`}>
          Earn Screen Time
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.1 }} className="mt-4 text-cyan-200/80">
          Turn scrolling into strength.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, delay: 0.2 }} className="mt-10">
          <Button onClick={onNext} className="px-8 py-4 text-lg">Get Started</Button>
        </motion.div>
      </div>
    </div>
  );
}

function RoleSelect({ onPick }) {
  const Card = ({ title, subtitle, icon: Icon, role }) => (
    <NeonCard className="p-5 flex items-center gap-4 hover:bg-white/5 transition-colors">
      <div className="shrink-0">
        <GlowRing size={56} />
        <div className="absolute inset-0 flex items-center justify-center text-cyan-200">
          <Icon />
        </div>
      </div>
      <div className="flex-1">
        <div className="text-white font-semibold">{title}</div>
        <div className="text-xs text-cyan-200/70">{subtitle}</div>
      </div>
      <Button variant="outline" onClick={() => onPick(role)}>
        Choose
      </Button>
    </NeonCard>
  );

  return (
    <div className={`min-h-screen ${bg} p-5 pb-24 space-y-4`}>
      <h2 className="text-xl font-semibold text-white mb-2">Who’s using the app?</h2>
      <Card title="I’m a Parent" subtitle="Manage time & rewards" icon={ShieldCheck} role="parent" />
      <Card title="I’m a Child" subtitle="Earn minutes with workouts" icon={Sparkles} role="child" />
      <BottomNav />
    </div>
  );
}

function ParentPair({ onNext }) {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-24 space-y-4`}>
      <h2 className="text-xl font-semibold text-white">Parent Signup</h2>
      <NeonCard className="p-5 space-y-4">
        <div className="text-cyan-200/80">Log in or pair with your child’s device.</div>
        <div className="flex gap-3">
          <Button className="flex-1">Generate Pair Code</Button>
          <Button variant="outline" className="flex-1"><QrCode size={18} className="mr-2" /> Scan QR</Button>
        </div>
        <div className="flex gap-3">
          <input placeholder="Enter family code" className="flex-1 bg-white/5 border border-cyan-400/20 rounded-[20px] px-4 py-3 text-cyan-100 placeholder:text-cyan-200/50 outline-none focus:ring-2 focus:ring-cyan-400/40" />
          <Button onClick={onNext}>Link</Button>
        </div>
      </NeonCard>
      <BottomNav />
    </div>
  );
}

function ChildSetup({ onNext }) {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-24 space-y-4`}>
      <h2 className="text-xl font-semibold text-white">Child Setup</h2>
      <NeonCard className="p-5 space-y-4">
        <div className="text-cyan-200/80">Connected Parent: Alex</div>
        <input placeholder="Nickname" className="w-full bg-white/5 border border-cyan-400/20 rounded-[20px] px-4 py-3 text-cyan-100 placeholder:text-cyan-200/50 outline-none focus:ring-2 focus:ring-cyan-400/40" />
        <div className="flex gap-3">
          <Button className="flex-1" onClick={onNext}>Continue</Button>
          <Button variant="outline" className="flex-1">Choose Avatar</Button>
        </div>
      </NeonCard>
      <BottomNav />
    </div>
  );
}

function ParentDashboard() {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <h2 className="text-xl font-semibold text-white">Dashboard</h2>
      <div className="grid grid-cols-1 gap-4">
        <NeonCard className="p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-cyan-200/70 text-sm">Today’s Earned</div>
              <div className="text-3xl font-bold text-white">45m</div>
            </div>
            <div className="flex items-center gap-2 text-cyan-200">
              <Timer size={20} />
              <span>Used: 20m</span>
            </div>
          </div>
        </NeonCard>
        <NeonCard className="p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="text-white font-semibold">Children</div>
            <Button size="sm">Add Child</Button>
          </div>
          <div className="flex items-center gap-3">
            <GlowRing />
            <div>
              <div className="text-white">Jordan</div>
              <div className="text-cyan-200/70 text-sm">Earned 25m today</div>
            </div>
          </div>
        </NeonCard>
        <Button className="w-full">Add Task / Reward</Button>
      </div>
      <BottomNav active="home" />
    </div>
  );
}

function BlockedApp() {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-24 space-y-4`}>
      <NeonCard className="p-6 space-y-3 text-center">
        <div className="text-white text-lg">Instagram is blocked by Earn Screen Time</div>
        <div className="text-cyan-200/80">Do 10 pushups to unlock 20 minutes</div>
        <Button className="mt-2">Start Exercise</Button>
      </NeonCard>
      <BottomNav />
    </div>
  );
}

function ExerciseDetection() {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <h2 className="text-xl font-semibold text-white">Push-ups</h2>
      <div className="relative rounded-[24px] overflow-hidden border border-cyan-400/30 shadow-[0_0_0_1px_rgba(0,240,255,0.15),0_20px_60px_rgba(0,0,0,0.45)]">
        <div className="aspect-[9/16] w-full bg-gradient-to-b from-[#0B0F1C] to-[#06101A] grid place-items-center">
          <div className="text-cyan-200/70 flex items-center gap-2">
            <Camera size={18} /> Live pose detection
          </div>
          <div className="absolute inset-0 rounded-[24px] ring-2 ring-cyan-400/50" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-cyan-200">00:28</div>
        <Button>Add Minutes</Button>
      </div>
      <BottomNav active="fitness" />
    </div>
  );
}

function SuccessPopup({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-30 grid place-items-center">
          <div className="absolute inset-0 bg-black/60" onClick={onClose} />
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ type: "spring", stiffness: 160, damping: 16 }} className="relative w-[90%] max-w-sm rounded-[28px] bg-[#0B0F1C] border border-cyan-400/30 p-6 text-center overflow-hidden">
            <Confetti play={open} />
            <div className="text-2xl font-extrabold text-white mb-2">20 Minutes Added!</div>
            <div className="text-cyan-200/80 mb-4">+120 XP</div>
            <Button onClick={onClose} className="w-full">Continue</Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function FitnessPage() {
  const Tab = ({ label, active }) => (
    <button className={`px-4 py-2 rounded-2xl text-sm ${active ? "bg-cyan-400/20 text-white" : "text-cyan-200/70"}`}>{label}</button>
  );
  const Card = ({ title, level, duration }) => (
    <NeonCard className="p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-white font-semibold">{title}</div>
          <div className="text-cyan-200/70 text-sm">{level} • {duration}</div>
        </div>
        <Button size="sm">Start Workout</Button>
      </div>
    </NeonCard>
  );
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <div className="flex gap-2">
        <Tab label="Quick Hits" active />
        <Tab label="Standard" />
        <Tab label="Challenges" />
      </div>
      <Card title="10 Pushups" level="Easy" duration="1 min" />
      <Card title="Core Blast" level="Medium" duration="6 min" />
      <Card title="Sprint Ladder" level="Hard" duration="10 min" />
      <BottomNav active="fitness" />
    </div>
  );
}

function LiveWorkout() {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <div className="relative rounded-[24px] overflow-hidden border border-cyan-400/30">
        <div className="aspect-video w-full bg-gradient-to-b from-[#07111A] to-[#0B0F1C] grid place-items-center">
          <Dumbbell className="text-cyan-300" />
        </div>
        <div className="absolute inset-0 rounded-[24px] pointer-events-none" style={{ boxShadow: "0 0 0 2px rgba(0,240,255,0.35), inset 0 0 40px rgba(0,240,255,0.15)" }} />
      </div>
      <div className="flex items-center justify-between text-cyan-200">
        <span>03:21</span>
        <div className="flex gap-2">
          <Button variant="outline">Pause</Button>
          <Button>Skip</Button>
        </div>
      </div>
      <BottomNav active="fitness" />
    </div>
  );
}

function JourneyPage() {
  const Node = ({ label, completed }) => (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 rounded-full grid place-items-center ${completed ? "bg-gradient-to-r from-[#9B6BFF] to-[#00F0FF]" : "bg-white/5"}`}>
        <Coins className="text-white" size={18} />
      </div>
      <div className="text-white">{label}</div>
    </div>
  );
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <Node label="Champion’s Mindset" completed />
      <Node label="Consistency Streak" />
      <Node label="Strength Builder" />
      <BottomNav active="journey" />
    </div>
  );
}

function RewardsPage() {
  const Reward = ({ title, minutes }) => (
    <NeonCard className="p-4 flex items-center justify-between">
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-cyan-200/70 text-sm">Redeem for {minutes} minutes</div>
      </div>
      <Button size="sm">Redeem</Button>
    </NeonCard>
  );
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <div className="text-white font-semibold">Coins: 320 • Minutes: 50</div>
      <Reward title="30 Extra Minutes" minutes={30} />
      <Reward title="Weekend Boost" minutes={60} />
      <BottomNav active="community" />
    </div>
  );
}

function CommunityPage() {
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <NeonCard className="p-4">
        <div className="text-white font-semibold">Leaderboard</div>
        <div className="mt-3 space-y-2">
          {["Alex", "Jordan", "Riley"].map((n, i) => (
            <div key={n} className="flex items-center gap-3">
              <GlowRing />
              <div className="text-white">{i + 1}. {n}</div>
            </div>
          ))}
        </div>
      </NeonCard>
      <BottomNav active="community" />
    </div>
  );
}

function SettingsPage() {
  const Toggle = ({ label }) => (
    <div className="flex items-center justify-between py-2">
      <div className="text-cyan-200">{label}</div>
      <label className="inline-flex items-center cursor-pointer">
        <input type="checkbox" className="peer sr-only" defaultChecked />
        <span className="w-12 h-6 bg-white/10 rounded-full relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:w-5 after:h-5 after:bg-white after:rounded-full peer-checked:after:translate-x-6 transition-all" />
      </label>
    </div>
  );
  return (
    <div className={`min-h-screen ${bg} p-5 pb-28 space-y-4`}>
      <NeonCard className="p-5 space-y-2">
        <div className="text-white font-semibold">Profile</div>
        <Toggle label="App Lock" />
        <Toggle label="Exercise Calibration" />
      </NeonCard>
      <BottomNav active="settings" />
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState("splash");
  const [successOpen, setSuccessOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {screen === "splash" && <Splash onNext={() => setScreen("role")} />}
      {screen === "role" && <RoleSelect onPick={(r) => setScreen(r === "parent" ? "parent-pair" : "child-setup")} />}
      {screen === "parent-pair" && <ParentPair onNext={() => setScreen("child-setup")} />}
      {screen === "child-setup" && <ChildSetup onNext={() => setScreen("parent-dashboard")} />}
      {screen === "parent-dashboard" && <ParentDashboard />}
      {screen === "blocked" && <BlockedApp />}
      {screen === "exercise" && <ExerciseDetection />}
      {screen === "fitness" && <FitnessPage />}
      {screen === "live" && <LiveWorkout />}
      {screen === "journey" && <JourneyPage />}
      {screen === "rewards" && <RewardsPage />}
      {screen === "community" && <CommunityPage />}
      {screen === "settings" && <SettingsPage />}
      <SuccessPopup open={successOpen} onClose={() => setSuccessOpen(false)} />
    </div>
  );
}
