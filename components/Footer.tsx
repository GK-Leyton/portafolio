import { ArrowUp } from "lucide-react";
import { DATA } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-900 light:border-zinc-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 text-[13px] sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 font-serif text-[13px] text-zinc-100 light:border-zinc-200 light:bg-white light:text-zinc-900">
            HL
          </span>
          <span className="text-zinc-500 light:text-zinc-500">
            © {new Date().getFullYear()} Heider Leyton · Diseñado y construido en Bogotá.
          </span>
        </div>
        <div className="flex items-center gap-5 text-zinc-500 light:text-zinc-500">
          <a
            href={DATA.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 light:hover:text-zinc-900"
          >
            GitHub
          </a>
          <a
            href={DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 light:hover:text-zinc-900"
          >
            LinkedIn
          </a>
          <a
            href={"mailto:" + DATA.email}
            className="hover:text-zinc-200 light:hover:text-zinc-900"
          >
            Email
          </a>
          <a
            href="#inicio"
            className="inline-flex items-center gap-1.5 hover:text-zinc-200 light:hover:text-zinc-900"
          >
            Volver arriba <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </footer>
  );
}
