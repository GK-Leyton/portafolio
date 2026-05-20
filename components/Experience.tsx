import { DATA } from "@/lib/data";
import Section from "./Section";
import Chip from "./Chip";

export default function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Experiencia"
      title={
        <>
          Donde he{" "}
          <span className="font-serif italic font-normal text-zinc-400 light:text-zinc-500">
            enviado código
          </span>
          .
        </>
      }
      kicker="Roles donde aprendí a colaborar, especificar y enviar a producción."
    >
      <ol className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-zinc-800 via-zinc-800/60 to-transparent light:from-zinc-200 light:via-zinc-200/60" />

        {DATA.experience.map((e, i) => (
          <li
            key={e.company}
            className={
              "relative pl-10 " + (i === DATA.experience.length - 1 ? "" : "pb-10")
            }
          >
            {/* Node */}
            <div className="absolute left-0 top-2 flex h-[15px] w-[15px] items-center justify-center">
              <span className="absolute h-[15px] w-[15px] rounded-full border border-zinc-700 bg-zinc-950 light:border-zinc-300 light:bg-white" />
              <span className="relative h-[5px] w-[5px] rounded-full bg-violet-400 light:bg-violet-600" />
            </div>

            <div className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-7 light:border-zinc-200 light:bg-white">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-zinc-50 light:text-zinc-900">
                    {e.role}
                    <span className="text-zinc-500 light:text-zinc-500"> · {e.company}</span>
                  </h3>
                  <div className="mt-1 text-[13px] text-zinc-500 light:text-zinc-500">{e.type}</div>
                </div>
                <span className="font-mono text-[12px] tracking-tight text-zinc-400 light:text-zinc-500">
                  {e.period}
                </span>
              </div>

              <ul className="mt-5 space-y-2 text-[14.5px] leading-relaxed text-zinc-300 light:text-zinc-700">
                {e.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-zinc-600 light:bg-zinc-400" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {e.stack.map((s) => (
                  <Chip key={s} subtle>
                    {s}
                  </Chip>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
