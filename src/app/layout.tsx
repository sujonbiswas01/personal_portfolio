import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sujon Biswas | Full Stack Developer",
  description: "Sujon Biswas — Full Stack Developer portfolio. Crafting professional, innovative, and responsive web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
    suppressHydrationWarning
      data-scroll-behavior="smooth"
      lang="en"
      className={`dark ${inter.variable} ${mono.variable} font-sans h-full antialiased`}
    >
      <head>
        {/* Inline critical CSS to prevent flash of unstyled content */}
        <style dangerouslySetInnerHTML={{ __html: `
          html { background: #0d1117; }
          body { background: #0d1117; }
        `}} />
      </head>
      <body
        suppressHydrationWarning
        data-new-gr-c-s-check-loaded="..."
        data-gr-ext-installed=""
        className={`w-full overflow-x-hidden min-h-screen font-sans antialiased bg-background`}
      >
          
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}