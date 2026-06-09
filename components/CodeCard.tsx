import { Terminal } from "lucide-react";

type TokenType = "k" | "v" | "pr" | "st" | "n" | "b" | "s" | "p";
type Token = [TokenType, string];

const colorMap: Record<TokenType, string> = {
  k: "text-violet-400 light:text-violet-600",
  v: "text-sky-300 light:text-sky-700",
  pr: "text-sky-200 light:text-sky-800",
  st: "text-emerald-300 light:text-emerald-700",
  n: "text-amber-300 light:text-amber-600",
  b: "text-amber-300 light:text-amber-600",
  s: "text-zinc-400 light:text-zinc-500",
  p: "text-zinc-500 light:text-zinc-500",
};

const lines: Token[][] = [
  [["k", "const"], ["s", " "], ["v", "developer"], ["p", " = "], ["p", "{"]],
  [["p", "  "], ["pr", "name"], ["p", ": "], ["st", "'Heider Leyton'"], ["p", ","]],
  [["p", "  "], ["pr", "role"], ["p", ": "], ["st", "'Full Stack Developer'"], ["p", ","]],
  [["p", "  "], ["pr", "location"], ["p", ": "], ["st", "'Bogotá, Colombia'"], ["p", ","]],
  [["p", "  "], ["pr", "stack"], ["p", ": ["], ["st", "'Laravel'"], ["p", ", "], ["st", "'Next.js'"], ["p", ", "], ["st", "'Flutter'"], ["p", "],"]],
  [["p", "  "], ["pr", "years"], ["p", ": "], ["n", "2"], ["p", ","]],
  [["p", "  "], ["pr", "shipping"], ["p", ": "], ["b", "true"], ["p", ","]],
  [["p", "  "], ["pr", "available"], ["p", ": "], ["b", "true"], ["p", ","]],
  [["p", "};"]],
];

export default function CodeCard() {
  return (
    <div className="reveal-3 relative">
      {/* ambient halo */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-transparent blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-md shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] light:border-zinc-200 light:bg-white">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3 light:border-zinc-200">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="font-mono text-[11px] tracking-tight text-zinc-500 light:text-zinc-500">
            developer.ts
          </div>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-600 light:text-zinc-400">
            <Terminal className="h-3 w-3" strokeWidth={1.75} />
            <span>main</span>
          </div>
        </div>

        {/* Code body */}
        <div className="grid grid-cols-[2.5rem_1fr] font-mono text-[13px] leading-[1.7]">
          {/* Line numbers */}
          <div className="select-none border-r border-zinc-900 bg-zinc-950/40 py-5 text-right text-zinc-600 light:border-zinc-100 light:bg-zinc-50/60 light:text-zinc-400">
            {lines.map((_, i) => (
              <div key={i} className="px-3">
                {i + 1}
              </div>
            ))}
          </div>
          {/* Tokens */}
          <pre className="overflow-x-auto py-5 pl-4 pr-5">
            {lines.map((toks, i) => (
              <div key={i} className="whitespace-pre">
                {toks.map(([t, txt], j) => (
                  <span key={j} className={colorMap[t]}>
                    {txt}
                  </span>
                ))}
                {i === lines.length - 1 && (
                  <span className="ml-0.5 inline-block h-[1.05em] w-[7px] -mb-[3px] translate-y-[3px] bg-emerald-300/90 caret align-baseline light:bg-emerald-600" />
                )}
              </div>
            ))}
          </pre>
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between border-t border-zinc-800/80 px-4 py-2 font-mono text-[10.5px] text-zinc-500 light:border-zinc-200 light:text-zinc-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 light:bg-emerald-500" />
              ready
            </span>
            <span>UTF-8</span>
            <span>LF</span>
          </div>
          <div>TypeScript · 9 lines</div>
        </div>
      </div>
    </div>
  );
}
