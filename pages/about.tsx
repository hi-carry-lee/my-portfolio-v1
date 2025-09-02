"use client";
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 pb-16"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-chart-1/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chart-3/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 pt-2">
          {/* 标题部分 */}
          <div
            className={`text-center space-y-4 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate full-stack developer who focuses on creating
              excellent user experiences and efficient solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Switch */}
            <div
              className={`grid grid-rows-[auto_1fr] h-full transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                The Switch
              </h3>
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
                <p className="text-muted-foreground leading-relaxed">
                  After graduating with a Vehicle Engineering degree, I spent
                  just one year as an automotive engineer before transitioning
                  to sales. During those sales years, I read extensively and was
                  particularly struck by the idea that "computer science and
                  English are the two essential skills for the modern world" –
                  that's when I decided to make the leap into programming in
                  2019.
                </p>
              </div>
            </div>

            {/* Why I Love Code */}
            <div
              className={`grid grid-rows-[auto_1fr] h-full transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why I Love Code
              </h3>
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
                <p className="text-muted-foreground leading-relaxed">
                  There's something deeply satisfying about the logical
                  consistency of programming – when something works, it works,
                  and when it doesn't, there's always a clear reason why.
                </p>
              </div>
            </div>

            {/* Community Spirit */}
            <div
              className={`grid grid-rows-[auto_1fr] h-full transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Community Spirit
              </h3>
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
                <p className="text-muted-foreground leading-relaxed">
                  What amazes me most is how the open-source world lets regular
                  developers like me build on the work of brilliant minds who
                  share their tools freely.
                </p>
              </div>
            </div>

            {/* Looking Ahead */}
            <div
              className={`grid grid-rows-[auto_1fr] h-full transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Looking Ahead
              </h3>
              <div className="p-6 bg-card border rounded-lg hover:shadow-lg transition-all duration-300">
                <p className="text-muted-foreground leading-relaxed">
                  With AI reshaping everything, I'm excited rather than worried
                  – I see more opportunities to explore, which is why I'm
                  seeking remote work to have more time for learning new
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
