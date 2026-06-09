import { DATA } from "@/lib/data";
import Section from "./Section";

const ticker = [
  "Laravel",
  "Next.js",
  "Spring Boot",
  "Flutter",
  "TypeScript",
  "PostgreSQL",
  "Docker",
  "Tailwind",
  "SQL Server",
  "Kotlin",
  "Angular",
  "Python",
];

export default function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title={
        <>
          Las herramientas con las que{" "}
          <span className="font-light text-zinc-400 light:text-zinc-500">
            trabajo
          </span>
          .
        </>
      }
      kicker="Pragmático sobre qué usar y cuándo. Listo para aprender lo siguiente."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {DATA.stack.map((group) => (
          <div
            key={group.cat}
            className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 light:border-zinc-200 light:bg-white"
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                {group.cat}
              </div>
              <span className="font-mono text-[11px] text-zinc-600 light:text-zinc-400">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="mt-5 space-y-2.5">
              {group.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-2.5 text-[14.5px] text-zinc-200 light:text-zinc-800"
                >
                  <span className="inline-block h-1 w-1 rounded-full bg-zinc-600 light:bg-zinc-400" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="relative mt-12 overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/40 py-5 light:border-zinc-200 light:bg-white">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-zinc-950 to-transparent light:from-white" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-zinc-950 to-transparent light:from-white" />
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap font-mono text-[13px] text-zinc-500 light:text-zinc-500">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-10">
              <span>{t}</span>
              <span className="text-zinc-700 light:text-zinc-300">✦</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
