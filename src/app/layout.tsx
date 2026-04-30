import type { Metadata } from "next";
import { ToastContainer } from 'react-toastify';
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Sujon",
  description: "Sujon Personal website",
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
      className={`${inter.variable} ${mono.variable} font-sans h-full antialiased`}
    >
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