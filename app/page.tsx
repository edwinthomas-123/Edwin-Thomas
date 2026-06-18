import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Goals from "./components/Goals";
import WhyGermany from "./components/WhyGermany";
import Contact from "./components/Contact";
import ScrollyCanvasWrapper from "./components/ScrollyCanvasWrapper";

export default function Home() {
  return (
    <main style={{ background: "#050810", position: "relative", zIndex: 1 }}>
      {/* Sticky nav */}
      <Navbar />

      {/* ── Scrollytelling hero (500vh canvas animation) ── */}
      <section id="hero">
        <ScrollyCanvasWrapper />
      </section>

      {/* ── About: Ausbildung Mindset ── */}
      <section id="about">
        <About />
      </section>

      {/* ── Skills: Technical Expertise ── */}
      <section id="skills">
        <Skills />
      </section>

      {/* ── Projects: Technical Projects ── */}
      <section id="projects">
        <Projects />
      </section>

      {/* ── Goals: Learning Journey Timeline ── */}
      <section id="goals">
        <Goals />
      </section>

      {/* ── Why Germany Section ── */}
      <section id="why-germany">
        <WhyGermany />
      </section>

      {/* ── Contact + Footer ── */}
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
