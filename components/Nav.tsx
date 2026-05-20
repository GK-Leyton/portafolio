"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/app/theme-provider";

const items = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "stack", label: "Stack" },
  { id: "experiencia", label: "Experiencia" },
  { id: "contacto", label: "Contacto" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState("inicio");
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["inicio", ...items.map((i) => i.id)]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const dark = theme === "dark";

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-40 transition-all " + (scrolled ? "pt-3" : "pt-5")
      }
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 sm:px-8">
        <a href="#inicio" className="group inline-flex items-center gap-2.5">
          <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/80 backdrop-blur light:border-zinc-200 light:bg-white/80">
            <span className="font-serif text-[14px] text-zinc-100 light:text-zinc-900">HL</span>
          </span>
          <span className="hidden text-[13px] font-medium text-zinc-300 group-hover:text-zinc-50 sm:inline light:text-zinc-700 light:group-hover:text-zinc-900">
            heider.dev
          </span>
        </a>

        <nav
          className={
            "hidden items-center gap-1 rounded-full border bg-zinc-950/70 px-2 py-1.5 text-[13px] backdrop-blur-xl transition-all md:flex light:bg-white/70 " +
            (scrolled
              ? "border-zinc-800 light:border-zinc-200"
              : "border-zinc-900 light:border-zinc-200/70")
          }
        >
          {items.map((it) => {
            const isActive = active === it.id;
            return (
              <a
                key={it.id}
                href={"#" + it.id}
                className={
                  "rounded-full px-3.5 py-1.5 transition " +
                  (isActive
                    ? "bg-zinc-800/80 text-zinc-50 light:bg-zinc-900 light:text-zinc-50"
                    : "text-zinc-400 hover:text-zinc-100 light:text-zinc-600 light:hover:text-zinc-900")
                }
              >
                {it.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950/70 text-zinc-300 backdrop-blur transition hover:text-zinc-50 light:border-zinc-200 light:bg-white/70 light:text-zinc-700 light:hover:text-zinc-900"
            aria-label="Cambiar tema"
            title={dark ? "Cambiar a claro" : "Cambiar a oscuro"}
          >
            {mounted &&
              (dark ? (
                <Sun className="h-[15px] w-[15px]" strokeWidth={1.75} />
              ) : (
                <Moon className="h-[15px] w-[15px]" strokeWidth={1.75} />
              ))}
          </button>
          <a
            href="#contacto"
            className="hidden rounded-full bg-zinc-50 px-4 py-2 text-[13px] font-medium text-zinc-900 transition hover:bg-white sm:inline-flex light:bg-zinc-900 light:text-zinc-50 light:hover:bg-zinc-800"
          >
            Contáctame
          </a>
        </div>
      </div>
    </header>
  );
}
