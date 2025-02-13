import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "@/layout/Layout";
import CustomCursor from "@/components/shared/CustomCursor";

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
      <body className={`bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100`} suppressHydrationWarning={true}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>
            {children}
            <CustomCursor />
          </Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
