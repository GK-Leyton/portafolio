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
      {/* Background crosshatch */}
      <div className="pointer-events-none fixed inset-0 -z-10 text-stone-700/40 dotgrid light:text-stone-400/40" />
      <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-amber-500/[0.05] via-rose-500/[0.025] to-transparent light:from-amber-500/[0.06] light:via-rose-500/[0.03]" />

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
