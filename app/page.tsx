import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      
      <section id="contact" className="min-h-screen flex items-center justify-center bg-bg-surface">
        <h2 className="text-3xl font-display text-text-primary">Contact Section</h2>
      </section>
    </>
  );
}