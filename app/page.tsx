import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      {/* Background dot grid */}
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.18] text-zinc-700 dotgrid light:opacity-[0.5] light:text-zinc-300" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-indigo-500/[0.07] via-fuchsia-500/[0.03] to-transparent light:from-indigo-500/[0.04] light:via-fuchsia-500/[0.02]" />

      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
