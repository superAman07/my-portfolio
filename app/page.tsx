import { Button } from "@/components/ui/Button";
import Navbar from "@/components/portfolio/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero placeholder - full height so we can test scroll */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center gap-8 p-8">
        <h1 className="text-5xl font-display text-text-primary font-bold">
          Crimson Night
        </h1>
        <p className="text-text-body">Scroll down to test navbar blur ↓</p>
        <div className="flex flex-wrap gap-6">
          <Button variant="brutalist">View My Work</Button>
          <Button variant="brutalist-filled">Send Message</Button>
          <Button variant="brutalist-outline">Resume ↗</Button>
        </div>
      </section>

      {/* Dummy sections for scroll testing */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-bg-surface">
        <h2 className="text-3xl font-display text-text-primary">Projects Section</h2>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-display text-text-primary">Skills Section</h2>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-bg-surface">
        <h2 className="text-3xl font-display text-text-primary">Contact Section</h2>
      </section>
    </>
  );
}