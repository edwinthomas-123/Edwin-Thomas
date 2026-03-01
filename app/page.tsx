import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import Contact from "./components/Contact";
import ScrollyCanvasWrapper from "./components/ScrollyCanvasWrapper";

export default function Home() {
  return (
    <main style={{ background: "#050810" }}>
      {/* Sticky nav */}
      <Navbar />

      {/* ── Scrollytelling hero (500vh canvas animation) ── */}
      <section id="hero">
        <ScrollyCanvasWrapper />
      </section>

      {/* ── About: Antigravity Mindset ── */}
      <section id="about">
        <About />
      </section>

      {/* ── Skills: Technical Expertise ── */}
      <section id="skills">
        <Skills />
      </section>

      {/* ── Projects: Major Projects ── */}
      <section id="projects">
        <Projects />
      </section>

      {/* ── Goals: Career Goals timeline ── */}
      <section id="goals">
        <Goals />
      </section>

      {/* ── Contact + Footer ── */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
