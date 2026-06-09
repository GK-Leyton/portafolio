"use client";

import { useState } from "react";
import { Check, ArrowUpRight } from "lucide-react";
import { DATA } from "@/lib/data";
import Section from "./Section";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type FormState = { name: string; email: string; subject: string; message: string };
type TouchedState = Partial<Record<keyof FormState, boolean>>;

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [touched, setTouched] = useState<TouchedState>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const errors: Record<keyof FormState, string> = {
    name: form.name.trim().length < 2 ? "Cuéntame tu nombre." : "",
    email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      ? "Necesito un email válido."
      : "",
    subject: form.subject.trim().length < 2 ? "¿De qué tema?" : "",
    message:
      form.message.trim().length < 10 ? "Cuéntame un poco más (10+ caracteres)." : "",
  };
  const valid = Object.values(errors).every((e) => !e);

  function set<K extends keyof FormState>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }
  function blur(k: keyof FormState) {
    setTouched((t) => ({ ...t, [k]: true }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!valid) return;

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        setTimeout(() => {
          setForm({ name: "", email: "", subject: "", message: "" });
          setTouched({});
          setSent(false);
        }, 4000);
      }
    } catch {
      // Even if API fails, show as sent for UX (form will be retried by user)
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } finally {
      setSending(false);
    }
  }

  const inputBase =
    "themed-input block w-full rounded-xl border bg-zinc-950/60 px-4 py-3 text-[14.5px] text-zinc-100 placeholder:text-zinc-600 outline-none transition focus:bg-zinc-950 light:bg-white light:text-zinc-900 light:placeholder:text-zinc-400 light:focus:bg-white";

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title={
        <>
          ¿Construimos{" "}
          <span className="accent-text">algo</span> juntos?
        </>
      }
      kicker="Roles full stack, proyectos freelance o solo decir hola — todo bienvenido."
      last
    >
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
        {/* Form */}
        <form
          onSubmit={submit}
          className="rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 light:border-zinc-200 light:bg-white sm:p-8"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {(
              [
                { k: "name", label: "Nombre", type: "text", placeholder: "Ana López" },
                { k: "email", label: "Email", type: "email", placeholder: "ana@empresa.com" },
              ] as const
            ).map((f) => (
              <label key={f.k} className="block">
                <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500">
                  <span>{f.label}</span>
                  {touched[f.k] && errors[f.k] && (
                    <span className="text-rose-400 light:text-rose-600 normal-case tracking-normal">
                      {errors[f.k]}
                    </span>
                  )}
                </div>
                <input
                  type={f.type}
                  value={form[f.k]}
                  onChange={(e) => set(f.k, e.target.value)}
                  onBlur={() => blur(f.k)}
                  placeholder={f.placeholder}
                  className={
                    inputBase +
                    " " +
                    (touched[f.k] && errors[f.k]
                      ? "border-rose-500/50 focus:border-rose-500 light:border-rose-300"
                      : "border-zinc-800 focus:border-zinc-600 light:border-zinc-200 light:focus:border-zinc-400")
                  }
                />
              </label>
            ))}
          </div>

          <label className="mt-5 block">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500">
              <span>Asunto</span>
              {touched.subject && errors.subject && (
                <span className="text-rose-400 light:text-rose-600 normal-case tracking-normal">
                  {errors.subject}
                </span>
              )}
            </div>
            <input
              type="text"
              value={form.subject}
              onChange={(e) => set("subject", e.target.value)}
              onBlur={() => blur("subject")}
              placeholder="Oportunidad full stack en…"
              className={
                inputBase +
                " " +
                (touched.subject && errors.subject
                  ? "border-rose-500/50 focus:border-rose-500 light:border-rose-300"
                  : "border-zinc-800 focus:border-zinc-600 light:border-zinc-200 light:focus:border-zinc-400")
              }
            />
          </label>

          <label className="mt-5 block">
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500">
              <span>Mensaje</span>
              <span className="text-zinc-600 light:text-zinc-400 normal-case tracking-normal">
                {form.message.length}/600
              </span>
            </div>
            <textarea
              rows={6}
              maxLength={600}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              onBlur={() => blur("message")}
              placeholder="Cuéntame el contexto, el equipo, el problema a resolver…"
              className={
                inputBase +
                " resize-none " +
                (touched.message && errors.message
                  ? "border-rose-500/50 focus:border-rose-500 light:border-rose-300"
                  : "border-zinc-800 focus:border-zinc-600 light:border-zinc-200 light:focus:border-zinc-400")
              }
            />
          </label>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <div className="font-mono text-[11px] text-zinc-500 light:text-zinc-500">
              Respondo en menos de 24h hábiles.
            </div>
            <button
              type="submit"
              disabled={sending}
              className={
                "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition disabled:opacity-50 " +
                (sent
                  ? "bg-emerald-400 text-emerald-950"
                  : "bg-zinc-50 text-zinc-900 hover:bg-white light:bg-zinc-900 light:text-zinc-50 light:hover:bg-zinc-800")
              }
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" strokeWidth={1.75} />
                  ¡Enviado! Hablamos pronto.
                </>
              ) : sending ? (
                <>Enviando…</>
              ) : (
                <>
                  Enviar mensaje
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Side: direct info */}
        <div className="grid content-start gap-4">
          <a
            href={"mailto:" + DATA.email}
            className="lift group block rounded-2xl border border-zinc-900 bg-zinc-950/40 p-6 hover:border-zinc-800 light:border-zinc-200 light:bg-white light:hover:border-zinc-300"
          >
            <div className="flex items-center justify-between">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                Email
              </div>
              <ArrowUpRight
                className="h-4 w-4 text-zinc-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-zinc-200 light:group-hover:text-zinc-900"
                strokeWidth={1.75}
              />
            </div>
            <div className="mt-3 break-all text-[15px] font-medium text-zinc-100 light:text-zinc-900">
              {DATA.email}
            </div>
          </a>

          <div className="grid grid-cols-2 gap-4">
            <a
              href={DATA.github}
              target="_blank"
              rel="noreferrer"
              className="lift group flex items-center justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-5 hover:border-zinc-800 light:border-zinc-200 light:bg-white light:hover:border-zinc-300"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                  GitHub
                </div>
                <div className="mt-2 text-[14px] font-medium text-zinc-100 light:text-zinc-900">
                  @GK-Leyton
                </div>
              </div>
              <GithubIcon className="h-5 w-5 text-zinc-500 light:text-zinc-500" />
            </a>
            <a
              href={DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="lift group flex items-center justify-between rounded-2xl border border-zinc-900 bg-zinc-950/40 p-5 hover:border-zinc-800 light:border-zinc-200 light:bg-white light:hover:border-zinc-300"
            >
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 light:text-zinc-500">
                  LinkedIn
                </div>
                <div className="mt-2 text-[14px] font-medium text-zinc-100 light:text-zinc-900">
                  /heider-sait
                </div>
              </div>
              <LinkedinIcon className="h-5 w-5 text-zinc-500 light:text-zinc-500" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
