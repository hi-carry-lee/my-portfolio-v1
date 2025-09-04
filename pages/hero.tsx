"use client";
import { useEffect, useState } from "react";
import DeveloperIllustration from "./hero-image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-chart-2/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-chart-3/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* 左侧文字内容 */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* 问候语 */}
            <div className="space-y-4">
              <p className="text-lg font-medium text-muted-foreground animate-fade-in">
                👋 Hi All, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  Kerry
                </span>
              </h1>
              <div className="flex items-center gap-4">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground">
                  Full Stack Developer
                </h2>
                <div className="px-3 py-1 bg-chart-2/20 text-chart-2 rounded-full text-sm font-medium border border-chart-2/30">
                  FULLSTACK
                </div>
              </div>
            </div>

            {/* 描述文字 */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
              A passionate React full-stack developer with 5 years of
              experience, specializing in TypeScript and modern web
              technologies. I love programming and staying current with new
              technologies.
            </p>

            {/* 技能标签 */}
            <div className="flex flex-wrap gap-2">
              {["TS Fullstack", "Java"].map((skill, index) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* 操作按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* 社交链接 */}
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* 右侧插图 */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* 装饰性元素 */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-chart-1 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-chart-4 rounded-full animate-bounce delay-500" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-chart-3 rounded-full animate-pulse" />

              {/* 主要插图 */}
              <div className="relative z-10">
                <DeveloperIllustration className="w-full max-w-lg mx-auto" />
              </div>

              {/* 浮动元素 */}
              <div className="absolute top-10 -right-8 bg-card border rounded-lg p-3 shadow-lg animate-float">
                <div className="flex items-center gap-10">
                  <div className="w-2 h-2 bg-chart-1 rounded-full animate-pulse" />
                  <span className="text-xs font-medium"> Coding...</span>
                </div>
              </div>

              <div className="absolute bottom-20 -left-16 bg-card border rounded-lg p-3 shadow-lg animate-float delay-1000">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-chart-2 rounded-full animate-pulse" />
                  <span className="text-xs font-medium">Deploying...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 滚动提示 */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm">Scroll down</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
