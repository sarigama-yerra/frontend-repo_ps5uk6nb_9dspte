import clsx from "clsx";

export default function Button({
  children,
  variant = "solid",
  size = "md",
  className,
  ...props
}) {
  const base = "relative inline-flex items-center justify-center rounded-[24px] font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70";
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };
  const variants = {
    solid:
      "bg-gradient-to-r from-[#00F0FF] to-[#4EFA9E] text-[#0B0F1C] shadow-[0_8px_30px_rgba(0,240,255,0.25)] hover:shadow-[0_12px_40px_rgba(0,240,255,0.35)]",
    outline:
      "text-cyan-200 border border-cyan-400/40 bg-white/0 hover:bg-cyan-400/10 shadow-[inset_0_0_0_1px_rgba(0,240,255,0.5)]",
    ghost: "text-cyan-200 bg-white/0 hover:bg-white/5",
    purple:
      "bg-gradient-to-r from-[#9B6BFF] to-[#00F0FF] text-[#0B0F1C] shadow-[0_8px_30px_rgba(155,107,255,0.35)]",
  };

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
