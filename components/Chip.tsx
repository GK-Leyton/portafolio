import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
  subtle?: boolean;
}

export default function Chip({ children, subtle }: ChipProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-tight " +
        (subtle
          ? "border-zinc-800/80 bg-zinc-900/40 text-zinc-400 light:border-zinc-200 light:bg-white light:text-zinc-600"
          : "border-zinc-800 bg-zinc-900/60 text-zinc-300 light:border-zinc-200 light:bg-zinc-50 light:text-zinc-700")
      }
    >
      {children}
    </span>
  );
}
