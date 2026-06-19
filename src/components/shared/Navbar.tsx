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
  if (href === "/") return hash === "" || hash === "#";
  return hash === href;
}

export default function Navbar() {
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

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

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full bg-background/95 border-b border-border/80 backdrop-blur-md shadow-sm">
        <div className="px-4 sm:px-6 lg:px-8 h-16 md:h-[4.25rem] flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/sujon_logo.png"
              alt="Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 text-base font-medium">
            {Array.isArray(navItems) && navItems.length > 0 ? (
              navItems.map((item) => {
                const active = isActive(item.href, hash);
                return (
                  item.href.startsWith("#") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`px-2 py-1 transition-all duration-200 ease-out rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active
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
                      className={`px-2 py-1 transition-all duration-200 ease-out rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active
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
          <div className="flex items-center gap-3">
            <span className="text-2xl text-foreground opacity-70 px-2 py-1">🌙</span>
            <span className="inline-flex items-center px-6 py-2 text-base font-semibold rounded-xl bg-primary text-white">
              Contact
            </span>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 border-b border-border/80 backdrop-blur-md shadow-sm">
      {!open && (
        <div className="px-4 sm:px-6 lg:px-8 h-16 md:h-[4.25rem] flex items-center justify-between">
          <Link href="/" className="flex items-center" scroll={false} onClick={() => setHash("")}>
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
                const desktopBase = "px-4 py-2 transition-all duration-300 ease-out rounded-full text-sm md:text-base focus:outline-none";
                const desktopActive = "bg-gradient-to-b from-primary/10 to-primary/5 text-primary font-semibold shadow-[0_2px_10px_rgba(99,102,241,0.1)] border border-primary/20 ring-1 ring-primary/10";
                const desktopInactive = "text-foreground/70 hover:text-foreground hover:bg-foreground/5 font-medium";

                return (
                  item.href.startsWith("#") ? (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`${desktopBase} ${active ? desktopActive : desktopInactive}`}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      scroll={false}
                      onClick={() => setHash("")}
                      className={`${desktopBase} ${active ? desktopActive : desktopInactive}`}
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
        <div className="md:hidden h-screen">
          {/* Sidebar */}
          <aside className="relative flex flex-col w-full h-full max-w-full bg-black shadow-sm border-r border-border">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-border">
              <Link
                href="/"
                onClick={() => { setOpen(false); setHash(""); }}
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
                const mobileBase = "w-full px-5 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ease-out outline-none flex items-center";
                const mobileActive = "bg-gradient-to-r from-primary/15 to-transparent text-primary shadow-[inset_2px_0_0_0_var(--primary)] border border-primary/20 bg-primary/5";
                const mobileInactive = "text-foreground/70 hover:text-foreground hover:bg-foreground/5 hover:translate-x-1";

                return item.href.startsWith("#") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`${mobileBase} ${active ? mobileActive : mobileInactive}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={false}
                    onClick={() => { setOpen(false); setHash(""); }}
                    className={`${mobileBase} ${active ? mobileActive : mobileInactive}`}
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