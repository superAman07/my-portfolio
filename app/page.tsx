import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />

      <section id="skills" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-display text-text-primary">Skills Section</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-bg-surface">
        <h2 className="text-3xl font-display text-text-primary">Contact Section</h2>
      </section>
    </>
  );
}