import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "Kerrin's Portfolio",
    default: "Kerrin's Portfolio",
  },
  description: "Kerrin's Portfolio",
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
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
