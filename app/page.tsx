import Header from "@/components/header";
import AboutSection from "@/components/about";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contacts";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <div className="h-screen">
          <Hero />
        </div>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
