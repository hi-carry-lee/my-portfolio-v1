import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // 为所有路径应用基本安全头
        source: "/(.*)",
        headers: [
          // 防止被恶意网站嵌入iframe（保护品牌）
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          // 防止浏览器错误猜测文件类型
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
