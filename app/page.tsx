import Hero from "@/components/portfolio/Hero";
import Navbar from "@/components/portfolio/Navbar";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}