"use client";

import { useState } from "react";
import { UserRound, ArrowUpRight, Lock } from "lucide-react";
import { DATA } from "@/lib/data";
import Section from "./Section";
import Chip from "./Chip";

const tags = ["Todos", "Empresarial", "Personal", "Académico", "Proyecto de grado"];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");
  const filtered =
    filter === "Todos" ? DATA.projects : DATA.projects.filter((p) => p.tag === filter);

  return (
    <Section
      id="proyectos"
      eyebrow="Proyectos"
      title={
        <>
          Cosas que{" "}
          <span className="font-light text-zinc-400 light:text-zinc-500">
            he construido
          </span>
          .
        </>
      }
      kicker="Una selección de proyectos profesionales, académicos y personales."
    >
      {/* Filter chips */}
      <div className="mb-10 flex flex-wrap gap-2">
        {tags.map((t) => {
          const active = t === filter;
          return (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={
                "rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition " +
                (active
                  ? "border-zinc-200 bg-zinc-100 text-zinc-900 light:border-zinc-900 light:bg-zinc-900 light:text-zinc-50"
                  : "border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200 light:border-zinc-200 light:bg-white light:text-zinc-600 light:hover:border-zinc-300 light:hover:text-zinc-900")
              }
            >
              {t}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filtered.map((p, i) => (
          <article
            key={p.title}
            className="lift group relative overflow-hidden rounded-2xl border border-zinc-900 bg-zinc-950/50 p-7 hover:border-zinc-800 hover:bg-zinc-950/80 light:border-zinc-200 light:bg-white light:hover:border-zinc-300 light:hover:bg-zinc-50"
          >
            {/* Index + tag */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-tight text-zinc-500 light:text-zinc-500">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span className="inline-block h-px w-5 bg-current opacity-50" />
                <span>{p.year}</span>
              </div>
              <span className="rounded-full border border-zinc-800 px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.15em] text-zinc-400 light:border-zinc-200 light:text-zinc-500">
                {p.tag}
              </span>
            </div>

            <h3 className="mt-6 text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-50 light:text-zinc-900">
              {p.title}
            </h3>

            <p className="mt-3 text-pretty text-[14.5px] leading-relaxed text-zinc-400 light:text-zinc-600">
              {p.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <Chip key={s} subtle>
                  {s}
                </Chip>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-zinc-900 pt-5 light:border-zinc-200">
              <div className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 light:text-zinc-500">
                <UserRound className="h-3.5 w-3.5" strokeWidth={1.75} />
                {p.role}
              </div>
              {p.link ? (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-zinc-300 transition group-hover:text-zinc-50 light:text-zinc-700 light:group-hover:text-zinc-900"
                >
                  Ver repositorio
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-[12.5px] text-zinc-500 light:text-zinc-500">
                  <Lock className="h-3.5 w-3.5" strokeWidth={1.75} /> Privado
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
