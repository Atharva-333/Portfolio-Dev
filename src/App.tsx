import Frame from "@/components/chrome/Frame";
import Masthead from "@/components/chrome/Masthead";
import Footer from "@/components/chrome/Footer";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* faint construction grid behind everything */}
      <div
        aria-hidden
        className="grid-expose pointer-events-none fixed inset-0 z-0"
      />

      <div className="relative z-10">
        <Frame />
        <Masthead />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
