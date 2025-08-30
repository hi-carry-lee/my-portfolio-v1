import Header from "@/components/header";
import AboutSection from "@/components/about";
import ProjectsSection from "@/components/projects";
import ContactSection from "@/components/contacts";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
