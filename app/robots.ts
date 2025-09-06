// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isProd =
    process.env.VERCEL_ENV === "production" ||
    process.env.NODE_ENV === "production";

  if (!isProd) {
    // 预览/开发环境：全站禁止收录，防止泄露与权重分散
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  const site =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://yourproject.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site}/sitemap.xml`,
  };
}
