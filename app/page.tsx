import Header from "@/components/header";
import About from "@/components/about";
import Projects from "@/components/projects";
import Contact from "@/components/contacts";
import Skills from "@/components/skills";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

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
