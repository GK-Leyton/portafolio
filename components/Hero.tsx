import { MapPin, Briefcase, Clock, ArrowUpRight } from "lucide-react";
import { DATA } from "@/lib/data";
import CodeCard from "./CodeCard";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

export default function Hero() {
  return (
    <section
      id="inicio"
      data-screen-label="hero"
      className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-24 sm:px-8 sm:pt-32"
    >
      <div className="spot" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        {/* Left column */}
        <div className="relative">
          {/* Availability badge */}
          <div className="reveal mb-8 inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-[12px] text-zinc-300 backdrop-blur light:border-zinc-200 light:bg-white light:text-zinc-700">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-emerald-400/70 text-emerald-400/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-medium">Disponible</span>
            <span className="text-zinc-500 light:text-zinc-400">· abierto a oportunidades</span>
          </div>

          {/* Name + role */}
          <h1 className="reveal-2 text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-zinc-50 sm:text-6xl lg:text-[5.25rem] light:text-zinc-900">
            Heider <span className="font-serif italic font-normal accent-text">Leyton</span>
            <span className="block text-zinc-400 light:text-zinc-500">
              Full Stack Developer
              <span className="text-violet-400 light:text-violet-600">.</span>
            </span>
          </h1>

          <p className="reveal-3 mt-7 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg light:text-zinc-600">
            {DATA.pitch}
          </p>

          {/* Meta line */}
          <div className="reveal-4 mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[12px] text-zinc-500 light:text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.75} /> {DATA.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Briefcase className="h-3.5 w-3.5" strokeWidth={1.75} /> Pulpa Fruit
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" strokeWidth={1.75} /> GMT-5
            </span>
          </div>

          {/* CTAs */}
          <div className="reveal-4 mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-white light:bg-zinc-900 light:text-zinc-50 light:hover:bg-zinc-800"
            >
              Hablemos de tu proyecto
              <ArrowUpRight
                className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900/70 light:border-zinc-200 light:bg-white light:text-zinc-800 light:hover:border-zinc-300 light:hover:bg-zinc-50"
            >
              Ver proyectos
            </a>
            <a
              href={DATA.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-zinc-400 transition hover:text-zinc-100 light:text-zinc-500 light:hover:text-zinc-900"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-zinc-400 transition hover:text-zinc-100 light:text-zinc-500 light:hover:text-zinc-900"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="reveal-5 mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-zinc-900 pt-8 light:border-zinc-200">
            {DATA.stats.map((s) => (
              <div key={s.l}>
                <div className="font-serif text-3xl tracking-tight text-zinc-50 light:text-zinc-900">
                  {s.v}
                </div>
                <div className="mt-1 text-[12px] leading-snug text-zinc-500 light:text-zinc-500">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: code card */}
        <CodeCard />
      </div>
    </section>
  );
}
