"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Github, TwitterIcon } from "lucide-react";
import Link from "next/link";

const Contact = () => {
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

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // 邮箱地址 - 简单混淆
  const getEmail = () => {
    const parts = ["test-demo", "gmail", "com"];
    return `${parts[0]}@${parts[1]}.${parts[2]}`;
  };

  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      const email = getEmail();
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch {
      toast.error(`Failed to copy email automatically. Email: ${getEmail()}`);
    }
  };

  return (
    <div id="contact" className="py-12 md:py-24 px-4 sm:px-6 lg:px-8  mt-20">
      <div
        className={`max-w-6xl w-full mx-auto text-center mb-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
          Let&apos;s Get In Touch
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
          I&apos;m currently seeking remote opportunities as a Full Stack
          Developer.
        </p>
      </div>

      {/* 主要联系方式 */}
      <div
        className={`flex flex-col items-center space-y-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ animationDelay: "200ms" }}
      >
        {/* 邮箱按钮 */}
        <Button
          onClick={copyEmail}
          className="w-full max-w-xs py-3 px-5 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-blue-600 to-emerald-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">📧 {getEmail()}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
        </Button>
        <p className="text-sm text-slate-500 dark:text-slate-400 -mt-2">
          Click to copy email address
        </p>

        {/* 简历下载按钮 */}
        <Link
          href="/path/to/your-resume.pdf" // 替换为简历链接
          className="w-full max-w-xs py-3 px-5 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-blue-600 to-emerald-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 text-center"
        >
          Download Resume
        </Link>

        {/* 社交链接 */}
        <div
          className={`flex space-x-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "400ms" }}
        >
          <Link
            href="https://github.com/kaili-lab"
            className="bg-white dark:bg-slate-700/30 p-3 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={26} />
          </Link>
          <Link
            href="https://x.com/kaili_dev"
            className="bg-white dark:bg-slate-700/30 p-3 rounded-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon size={26} />
          </Link>
        </div>

        {/* 状态指示器 */}
        <div
          className={`text-center space-y-2 mt-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "600ms" }}
        >
          <span className="text-gray-600 dark:text-gray-300">
            Available for Remote Work
          </span>
          <div className="text-blue-600 dark:text-blue-300 text-sm">
            Typically respond within 24 hours
          </div>
          <div className="text-sm text-gray-400 dark:text-gray-500">
            Timezone: UTC+8 (Flexible hours)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
