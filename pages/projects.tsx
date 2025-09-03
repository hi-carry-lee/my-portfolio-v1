"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  icon: string;
  tech: string[];
  status: "Live" | "Development" | "Coming Soon";
  liveUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects: Project[] = [
    {
      title: "Family Schedule Planner",
      description: "An AI powered schedule planner for the family.",
      icon: "📅",
      tech: [
        "Nextjs",
        "Nestjs",
        "PostgreSQL",
        "TypeScript",
        "ShadcnUI",
        "TailWind CSS",
        "OpenAI",
        "Vercel",
      ],
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "English Assistant",
      description:
        "An AI powered English assistant that can help you learn English.",
      icon: "📋",
      tech: [
        "Nextjs",
        "Nestjs",
        "PostgreSQL",
        "TypeScript",
        "OpenAI",
        "ShadcnUI",
        "TailWind CSS",
        "Redis",
        "Vercel",
      ],
      status: "Live",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/10 border-green-400/20";
      case "Development":
        return "text-yellow-400 bg-yellow-400/10 border-yellow-400/20";
      default:
        return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    }
  };

  return (
    <section id="projects" className="min-h-screen py-6 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Building digital experiences with modern tech
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-3 
                  transition-all duration-500 hover:border-primary/50 hover:bg-card/80
                  hover:shadow-2xl hover:shadow-primary/10 hover:translate-x-2
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }
                `}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-chart-2/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    {/* Status */}
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full animate-pulse ${
                          project.status === "Live"
                            ? "bg-green-400"
                            : project.status === "Development"
                            ? "bg-yellow-400"
                            : "bg-blue-400"
                        }`}
                      />
                      <span
                        className={`text-sm font-medium px-2 py-1 rounded-full border ${getStatusColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                    </div>

                    {/* Project Icon */}
                    <div className="text-2xl animate-float">{project.icon}</div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-full text-xs font-medium
                          border border-border/30 transition-all duration-300 hover:bg-primary/20 hover:border-primary/30 hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="group/btn">
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:rotate-45 transition-transform" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      GitHub
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Projects Link */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-primary to-chart-2 hover:from-primary/90 hover:to-chart-2/90
                hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Link href="/projects">
                  View All Projects
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
