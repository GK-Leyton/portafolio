import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  kicker?: string;
  children: ReactNode;
  last?: boolean;
}

export default function Section({
  id,
  eyebrow,
  title,
  kicker,
  children,
  last,
}: SectionProps) {
  return (
    <section
      id={id}
      data-screen-label={id}
      className={
        "relative mx-auto w-full max-w-6xl px-6 sm:px-8 " +
        (last ? "pb-32" : "pb-28 sm:pb-36")
      }
    >
      <div className="mb-12 flex items-end justify-between gap-8 sm:mb-16">
        <div className="max-w-2xl">
          {eyebrow && (
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500">
              <span className="inline-block h-px w-6 bg-current opacity-50" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-semibold leading-[1.05] tracking-tight text-zinc-50 sm:text-5xl light:text-zinc-900">
            {title}
          </h2>
        </div>
        {kicker && (
          <div className="hidden max-w-xs text-pretty text-sm leading-relaxed text-zinc-400 light:text-zinc-500 md:block">
            {kicker}
          </div>
        )}
      </div>
      {children}
    </section>
  );
}
