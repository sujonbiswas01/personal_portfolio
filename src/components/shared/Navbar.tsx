"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LoadingContent from "../LoadingContent";

// Use hash-based navigation, hydrated on client only to avoid hydration mismatch
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

function isActive(href: string, hash: string) {
  // Special handling for Home, since its href is "/"
  if (href === "/") return hash === "" || hash === "#";
  return hash === href;
}

export default function Navbar() {
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Only update hash on client to avoid Next hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Get initial hash, fallback to "" for home
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle("dark", darkMode);
    }
  }, [darkMode, mounted]);

  // Prevent mismatches by not rendering nav until mounted on client
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/95 border-b border-border/80 backdrop-blur-md shadow-sm" />
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 border-b border-border/80 backdrop-blur-md shadow-sm">
      {!open && (
        <div className="px-4 sm:px-6 lg:px-8 h-16 md:h-[4.25rem] flex items-center justify-between">
          <Link href="/" className="flex items-center" scroll={false}>
            <img
              src="/images/sujon_logo.png"
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium">
            {Array.isArray(navItems) && navItems.length > 0 ? (
              navItems.map((item) => {
                const active = isActive(item.href, hash);
                return (
                  item.href.startsWith("#") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-2 py-1 transition-all duration-200 ease-out rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active
                          ? "text-primary font-semibold"
                          : "text-foreground opacity-65 hover:opacity-100 hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      scroll={false}
                      className={`px-2 py-1 transition-all duration-200 ease-out rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        active
                          ? "text-primary font-semibold"
                          : "text-foreground opacity-65 hover:opacity-100 hover:text-primary"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                );
              })
            ) : (
              <LoadingContent data="Content loading...." />
            )}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="text-2xl transition-all duration-200 ease-out text-foreground opacity-70 hover:opacity-100 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl px-2 py-1"
              aria-label="Toggle dark mode"
              type="button"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>

            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2 text-base font-semibold rounded-xl bg-primary text-white hover:-translate-y-1 hover:shadow-md transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Contact
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-3xl text-foreground px-2 py-1 rounded-xl transition duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Open menu"
              type="button"
            >
              ☰
            </button>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed z-50 inset-0 flex md:hidden bg-background/95 transition-all duration-300">
          {/* Sidebar */}
          <aside className="relative flex flex-col w-full h-full max-w-full bg-background shadow-sm border-r border-border">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-border">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
                scroll={false}
              >
                <img
                  src="/images/sujon_logo.png"
                  alt="Logo"
                  className="w-14 h-14 object-contain"
                />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="text-4xl text-foreground px-2 py-1 rounded-xl transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Close menu"
                type="button"
              >
                &times;
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-6 px-7 py-10 w-full">
              {navItems.map((item) => {
                const active = isActive(item.href, hash);
                return item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      active
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-foreground opacity-70 hover:opacity-100 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={() => setOpen(false)}
                    className={`w-full px-4 py-3 rounded-xl text-lg font-medium transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                      active
                        ? "bg-primary/10 text-primary border border-primary/20"
                        : "text-foreground opacity-70 hover:opacity-100 hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex-grow" />
          </aside>
        </div>
      )}
    </header>
  );
}