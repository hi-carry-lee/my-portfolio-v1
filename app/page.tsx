import Header from "@/pages/header";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Contact from "@/pages/contact";
import Skills from "@/pages/skills";
import Footer from "@/pages/footer";
import Hero from "@/pages/hero";

export default function Home() {
  // 计算工作年限,当前年份减去2019年
  const years = new Date().getFullYear() - 2020;
  return (
    <div>
      <Header />
      <main>
        <Hero years={years} />
        <About years={years} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
