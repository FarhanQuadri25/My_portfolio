import Hero from "@/components/hero/Hero";
import Nav from "@/components/nav/Nav";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";

export default function HomePage() {
  return (
    <div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}
