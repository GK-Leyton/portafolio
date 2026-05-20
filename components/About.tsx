import { DATA } from "@/lib/data";
import Section from "./Section";

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
      <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
        {/* Avatar card */}
        <div className="reveal">
          <div className="relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/60 p-1 light:border-zinc-200 light:bg-white">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 light:from-zinc-100 light:via-zinc-50 light:to-zinc-100">
              <div className="absolute inset-0 dotgrid text-zinc-800/60 light:text-zinc-300/70" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent blur-2xl" />
                  <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/80 font-serif text-7xl text-zinc-100 light:border-zinc-200 light:bg-white light:text-zinc-900">
                    {DATA.initials}
                  </div>
                </div>
              </div>
              <div className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                ./portrait
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[10px] tracking-tight text-zinc-500 light:text-zinc-500">
                v.{new Date().getFullYear()}
              </div>
            </div>
          </div>

          {/* Quick facts */}
          <dl className="mt-6 grid grid-cols-2 gap-3 text-[12.5px]">
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 px-3.5 py-3 light:border-zinc-200 light:bg-white">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                Ubicación
              </dt>
              <dd className="mt-1 text-zinc-200 light:text-zinc-800">Bogotá, CO</dd>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 px-3.5 py-3 light:border-zinc-200 light:bg-white">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                Idiomas
              </dt>
              <dd className="mt-1 text-zinc-200 light:text-zinc-800">ES · EN</dd>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 px-3.5 py-3 light:border-zinc-200 light:bg-white">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                Foco
              </dt>
              <dd className="mt-1 text-zinc-200 light:text-zinc-800">Backend + Mobile</dd>
            </div>
            <div className="rounded-xl border border-zinc-900 bg-zinc-950/40 px-3.5 py-3 light:border-zinc-200 light:bg-white">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                Estado
              </dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 text-zinc-200 light:text-zinc-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 light:bg-emerald-500" />{" "}
                Open to work
              </dd>
            </div>
          </dl>
        </div>

        {/* Text column */}
        <div className="reveal-2">
          <div className="space-y-6 text-pretty text-[17px] leading-relaxed text-zinc-300 light:text-zinc-700">
            {DATA.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-10 border-t border-zinc-900 pt-8 light:border-zinc-200">
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
      </div>
    </Section>
  );
}
