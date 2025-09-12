import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kerry's Portfolio",
    default: "Kerry's Portfolio - Full-Stack Developer",
  },
  description:
    "Remote Full-Stack Developer specializing in Next.js, React, Java backend, and modern web development. Available for your next project worldwide.",
  // 社交分享优化 - 核心功能
  openGraph: {
    title: "Kerry's Portfolio - Full-Stack Developer",
    description:
      "Remote Full-Stack Developer specializing in Next.js, React, Java backend, and modern web development.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kerry's Portfolio - Full-Stack Developer",
    description:
      "Remote Full-Stack Developer specializing in Next.js, React, Java backend, and modern web development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased max-w-6xl mx-auto px-4 `}
      >
        <ThemeProvider
          attribute="class" // 使用 class 切换主题
          defaultTheme="dark" // 默认主题
          enableSystem={true} // 跟随系统主题
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "var(--background)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
