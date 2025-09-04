"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Linkedin, Github } from "lucide-react";

const Contact = () => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const [usTime, setUsTime] = useState<string>("");
  const [euTime, setEuTime] = useState<string>("");
  const [auTime, setAuTime] = useState<string>("");

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // China time (GMT+8)
      const chinaTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Shanghai" })
      );
      setCurrentTime(
        chinaTime.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // US East time
      const usTimeZone = new Date(
        now.toLocaleString("en-US", { timeZone: "America/New_York" })
      );
      setUsTime(
        usTimeZone.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // Europe time
      const euTimeZone = new Date(
        now.toLocaleString("en-US", { timeZone: "Europe/London" })
      );
      setEuTime(
        euTimeZone.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      // Australia time
      const auTimeZone = new Date(
        now.toLocaleString("en-US", { timeZone: "Australia/Sydney" })
      );
      setAuTime(
        auTimeZone.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  // Copy email to clipboard
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("carry.zhang.dev@gmail.com");
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <div
      id="contact"
      className="h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl w-full">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
            Remote Full-Stack Developer | Available for Your Next Project
          </p>
        </div>

        {/* Main Contact Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left: Availability Status */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 lg:p-6 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-500/25 transition-all duration-300">
            <div className="text-center mb-6">
              <div className="text-4xl mb-3 animate-bounce">👨‍💻</div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-2 text-slate-800 dark:text-white">
                Developer Status
              </h3>
            </div>

            {/* Online Status */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-600 dark:text-green-400 font-medium text-base">
                Available for Remote Work
              </span>
            </div>

            {/* Current Time */}
            <div className="text-center mb-6">
              <div className="text-md text-slate-500 dark:text-slate-400 mb-2 inline-flex items-center gap-2">
                Current Time (GMT+8){" "}
              </div>
              <div className="text-2xl font-mono font-semibold text-blue-600 dark:text-blue-300">
                {currentTime}
              </div>
            </div>

            {/* Work Hours Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
                <span>Available Work Hours</span>
                <span>04:00 - 24:00</span>
              </div>
              <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded">
                {/* 00:00 标记线 */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-400 dark:bg-slate-500"></div>
                {/* 04:00 标记线 (1/6 位置) */}
                <div className="absolute left-1/6 top-0 h-full w-0.5 bg-green-500 dark:bg-green-400"></div>
                {/* 24:00 标记线 */}
                <div className="absolute right-0 top-0 h-full w-0.5 bg-slate-400 dark:bg-slate-500"></div>
                {/* 可工作时间段：从 04:00 到 24:00 (5/6 的宽度) */}
                <div className="absolute left-1/6 top-0 h-full w-5/6 bg-green-500/30 dark:bg-green-400/30 rounded"></div>
              </div>
              <div className="flex justify-between text-xs text-slate-400 dark:text-slate-500 mt-1">
                <span>00:00</span>
                <span>04:00</span>
                <span>12:00</span>
                <span>24:00</span>
              </div>
            </div>

            {/* Timezone Compatibility */}
            <div>
              <h4 className="text-base font-semibold mb-3 text-center text-slate-800 dark:text-white">
                Timezone Compatibility
              </h4>
              <div className="space-y-4">
                <div className="bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/20 p-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-slate-800 dark:text-white">
                        🇺🇸 US East
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Perfect overlap
                      </div>
                    </div>
                    <div className="text-blue-600 dark:text-blue-300 font-mono text-sm">
                      {usTime}
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-500/5 border border-green-200 dark:border-green-500/20 p-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-500/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-slate-800 dark:text-white">
                        🇪🇺 Europe
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Morning overlap
                      </div>
                    </div>
                    <div className="text-green-600 dark:text-green-300 font-mono text-sm">
                      {euTime}
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-500/5 border border-yellow-200 dark:border-yellow-500/20 p-2 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-500/10 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-sm text-slate-800 dark:text-white">
                        🇦🇺 Australia
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Evening overlap
                      </div>
                    </div>
                    <div className="text-yellow-600 dark:text-yellow-300 font-mono text-sm">
                      {auTime}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Main Contact */}
          <div className="bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl p-5 lg:p-6 hover:border-blue-400 dark:hover:border-blue-500/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-blue-500/25 transition-all duration-300">
            <h3 className="text-xl lg:text-2xl font-semibold mb-6 text-center text-slate-800 dark:text-white">
              Get In Touch
            </h3>

            {/* Primary Email CTA */}
            <div className="text-center mb-2">
              <Button
                onClick={copyEmail}
                className="w-full py-3 px-5 rounded-xl text-white font-semibold text-base bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  📧 carry.zhang.dev@gmail.com
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </Button>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                Click to copy email address
              </p>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm">
                Or connect with me on:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="#"
                  className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/30 p-3 rounded-lg text-center hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-xl mb-1 flex items-center justify-center">
                    <Linkedin />
                  </div>
                </a>
                <a
                  href="#"
                  className="bg-slate-100 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/30 p-3 rounded-lg text-center hover:border-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-xl mb-1 flex items-center justify-center">
                    <Github size={26} />
                  </div>{" "}
                </a>
              </div>
            </div>

            {/* Contact Preferences */}
            <div className="space-y-3 mt-4">
              <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-xl mr-3">⚡</span>
                  <span className="text-slate-700 dark:text-white">
                    Response Time
                  </span>
                </div>
                <span className="text-blue-600 dark:text-blue-300 font-medium text-sm">
                  Within 24 hours
                </span>
              </div>

              <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-xl mr-3">💼</span>
                  <span className="text-slate-700 dark:text-white">
                    Preferred Contact
                  </span>
                </div>
                <span className="text-green-600 dark:text-green-300 font-medium text-sm">
                  Email First
                </span>
              </div>

              <div className="flex items-center justify-between p-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                <div className="flex items-center">
                  <span className="text-xl mr-3">🌍</span>
                  <span className="text-slate-700 dark:text-white">
                    Remote Ready
                  </span>
                </div>
                <span className="text-purple-600 dark:text-purple-300 font-medium text-sm">
                  Worldwide
                </span>
              </div>
            </div>

            {/* Language Skills */}
            <div className="text-center mt-4">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                Language Proficiency
              </div>
              <div className="space-y-3">
                {/* 英语 - 工作语言 */}
                <div className="bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 p-3 rounded-lg">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl mr-3">🇺🇸</span>
                    <div className="text-center">
                      <div className="font-semibold text-blue-700 dark:text-blue-300 text-sm">
                        English
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">
                        Professional Working Language
                      </div>
                    </div>
                  </div>
                </div>

                {/* 中文 - 母语 */}
                <div className="bg-slate-50 dark:bg-slate-700/30 border border-slate-200 dark:border-slate-600/30 p-3 rounded-lg">
                  <div className="flex items-center justify-center">
                    <span className="text-2xl mr-3">🇨🇳</span>
                    <div className="text-center">
                      <div className="font-semibold text-slate-700 dark:text-white text-sm">
                        Chinese
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        Native Language
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
