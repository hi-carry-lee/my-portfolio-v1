import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourproject.vercel.app";
  const now = new Date();

  // 单页应用：只有主页，其他都是锚点
  const routes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${site}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
