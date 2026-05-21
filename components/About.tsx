import { DATA } from "@/lib/data";
import Section from "./Section";

const quickFacts = [
  { label: "Ubicación", value: "Bogotá, CO" },
  { label: "Idiomas", value: "ES · EN" },
  { label: "Foco", value: "Backend + Mobile" },
  { label: "Estado", value: "Open to work", dot: true },
];

export default function About() {
  return (
    <Section
      id="sobre-mi"
      eyebrow="Sobre mí"
      title={
        <>
          Construyo software{" "}
          <span className="font-serif italic font-normal text-zinc-400 light:text-zinc-500">
            con criterio
          </span>
          , no por moda.
        </>
      }
      kicker="Una breve introducción — sin buzzwords, sin paja."
    >
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:gap-16">
        {/* Bio + quick facts */}
        <div className="reveal">
          <div className="space-y-6 text-pretty text-[17px] leading-relaxed text-zinc-300 light:text-zinc-700">
            {DATA.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Quick facts */}
          <dl className="mt-10 grid grid-cols-2 gap-3 text-[12.5px] sm:grid-cols-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-zinc-900 bg-zinc-950/40 px-3.5 py-3 light:border-zinc-200 light:bg-white"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 inline-flex items-center gap-1.5 text-zinc-200 light:text-zinc-800">
                  {fact.dot && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 light:bg-emerald-500" />
                  )}
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Formación */}
        <div className="reveal-2">
          <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
            Formación
          </div>
          <ul className="space-y-3">
            {DATA.education.map((e) => (
              <li
                key={e.title}
                className="flex items-center justify-between gap-4 rounded-xl border border-zinc-900 bg-zinc-950/40 px-4 py-3 light:border-zinc-200 light:bg-white"
              >
                <div className="min-w-0">
                  <div className="truncate text-[14px] font-medium text-zinc-100 light:text-zinc-900">
                    {e.title}
                  </div>
                  <div className="mt-0.5 truncate text-[12.5px] text-zinc-500 light:text-zinc-500">
                    {e.org} · {e.year}
                  </div>
                </div>
                <span
                  className={
                    "shrink-0 rounded-full px-2.5 py-1 font-mono text-[10.5px] tracking-tight " +
                    (e.status === "En progreso" || e.status === "En curso"
                      ? "bg-amber-400/10 text-amber-300 light:bg-amber-100 light:text-amber-700"
                      : "bg-emerald-400/10 text-emerald-300 light:bg-emerald-100 light:text-emerald-700")
                  }
                >
                  {e.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
