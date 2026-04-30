"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
];

function isActive(href: string, hash: string) {
  if (href === "") return hash === "";
  return hash === href;
}

export default function Navbar() {
  const [hash, setHash] = useState(() =>
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur-md shadow-sm">
      
      {/* ✅ Container aligned with rootlayout */}
     {!open &&  <div className="app-shell h-16 md:h-[4.25rem] flex items-center justify-between">
        
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/sujon_logo.png"
          alt="Logo"
          className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-sm font-medium">
        {navItems.map((item) => {
          const active = isActive(item.href, hash);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`transition ${
                active
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Right Side */}
      <div className="flex items-center gap-2 sm:gap-3">
        
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-lg text-muted-foreground hover:text-primary transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-foreground"
        >
          ☰
        </button>
      </div>
    </div>}

      {/* ✅ Mobile Menu (your structure, improved color) */}
      {open && (
        <div className="fixed z-50 flex min-w-full min-h-full md:hidden bg-black/60 transition-all duration-300">
          
          {/* Sidebar */}
          <aside className="relative flex flex-col min-w-full min-h-full max-w-full bg-background shadow-2xl border-r border-border">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="flex items-center"
              >
                <img
                  src="/images/sujon_logo.png"
                  alt="Logo"
                  className="w-11 h-11 object-contain"
                />
              </Link>

              <button
                onClick={() => setOpen(false)}
                className="text-3xl text-muted-foreground hover:text-primary"
              >
                &times;
              </button>
            </div>

            {/* Nav Items */}
            <nav className="flex flex-col gap-3 px-6 py-7 w-full">
              {navItems.map((item) => {
                const active = isActive(item.href, hash);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`w-full px-4 py-2 rounded-lg text-base font-medium transition ${
                      active
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Contact */}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground text-center font-semibold shadow-lg hover:bg-primary/90 transition"
              >
                Contact
              </Link>
            </nav>

            <div className="flex-grow" />
          </aside>
        </div>
      )}
    </header>
  );
}