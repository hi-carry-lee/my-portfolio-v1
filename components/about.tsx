"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download,
  Award,
  Code,
  Users,
  Lightbulb,
  Target,
} from "lucide-react";

const AboutSection = () => {
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

  const skills = [
    {
      name: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "jQuery"],
    },
    {
      name: "Backend",
      items: ["Node.js", "Nest.js", "Java", "Spring Boot"],
    },
    {
      name: "Database",
      items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
    },
    { name: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git"] },
  ];

  const experiences = [
    {
      year: "2023 - 现在",
      title: "高级全栈开发工程师",
      company: "TechCorp Inc.",
      description: "负责企业级应用的前后端开发，带领5人团队完成多个重要项目。",
    },
    {
      year: "2021 - 2023",
      title: "全栈开发工程师",
      company: "StartupXYZ",
      description:
        "参与产品从0到1的完整开发流程，负责核心功能模块的设计与实现。",
    },
    {
      year: "2019 - 2021",
      title: "前端开发工程师",
      company: "WebDev Studio",
      description: "专注于用户界面开发和用户体验优化，参与多个商业网站项目。",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "技术能力",
      description:
        "熟练掌握React、TypeScript等现代前端技术栈，具备全栈开发能力",
    },
    {
      icon: Users,
      title: "项目经验",
      description: "参与多个商业项目开发，从需求分析到部署上线全流程参与",
    },
    {
      icon: Lightbulb,
      title: "问题解决",
      description: "善于分析技术难题，能够独立解决复杂的前后端技术问题",
    },
    {
      icon: Target,
      title: "持续学习",
      description: "保持技术敏感度，持续学习新技术，提升开发效率",
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-chart-1/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-chart-3/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
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

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* 左侧：个人介绍和技能 */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              {/* 个人介绍 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Introduction
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hi there! I'm a full-stack developer with 6 years of
                    experience who genuinely loves turning ideas into reality
                    through code.
                  </p>
                  <p>
                    I've been working with Java backends throughout my career
                    and recently fell in love with the modern TypeScript stack
                    (Next.js + Nest.js) for full-stack development.
                  </p>
                  <p>
                    I have a thing for clean, maintainable code that actually
                    makes sense. I love exploring new technologies and
                    leveraging them to enhance my development productivity.
                  </p>
                </div>
              </div>

              {/* 技能分类 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Skills
                </h3>
                <div className="space-y-4">
                  {skills.map((category, categoryIndex) => (
                    <div key={category.name} className="space-y-3">
                      <h4 className="text-lg font-medium text-chart-2">
                        {category.name}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((skill, skillIndex) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                            style={{
                              animationDelay: `${
                                categoryIndex * 100 + skillIndex * 50
                              }ms`,
                              opacity: isVisible ? 1 : 0,
                              transform: isVisible
                                ? "translateY(0)"
                                : "translateY(20px)",
                            }}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：经验时间线和成就 */}
            <div
              className={`space-y-8 transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              {/* 工作经历 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  工作经历
                </h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className="relative pl-8 border-l-2 border-chart-2/30 hover:border-chart-2 transition-colors duration-300"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateX(0)"
                          : "translateX(20px)",
                        transitionDelay: `${600 + index * 200}ms`,
                      }}
                    >
                      <div className="absolute -left-2.5 top-0 w-5 h-5 bg-chart-2 rounded-full border-4 border-background" />
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-chart-2" />
                          <span className="text-sm font-medium text-chart-2">
                            {exp.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground">
                          {exp.title}
                        </h4>
                        <p className="text-chart-1 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 工作亮点 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  工作亮点
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="p-4 bg-card border rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transitionDelay: `${800 + index * 100}ms`,
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-chart-2/20 rounded-lg group-hover:bg-chart-2 transition-colors duration-300">
                          <achievement.icon className="h-5 w-5 text-chart-2" />
                        </div>
                        <h4 className="font-semibold text-foreground">
                          {achievement.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
