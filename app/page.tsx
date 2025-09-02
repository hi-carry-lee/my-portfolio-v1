import Header from "@/pages/header";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Contact from "@/pages/contacts";
import Skills from "@/pages/skills";
import Footer from "@/pages/footer";
import Hero from "@/pages/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
