import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/layout/Layout";

export const metadata: Metadata = {
  title: "Ariya Khaksar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="scroll-smooth">
      <body className={`bg-slate-100 dark:bg-gray-800 dark:text-gray-50`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
