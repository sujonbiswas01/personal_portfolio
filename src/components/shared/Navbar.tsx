"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setHash(window.location.hash);

    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="sticky pb-4 top-0 z-50 w-full bg-[#020617]/90 backdrop-blur border-b border-[#1e293b]">
      
      {/* ✅ Container aligned with rootlayout */}
     {!open &&  <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/images/sujon_logo.png"
          alt="Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
        {navItems.map((item) => {
          const active = isActive(item.href, hash);
          return (
            <a
              key={item.name}
              href={item.href}
              className={`transition ${
                active
                  ? "text-[#9EFF00] font-semibold"
                  : "text-gray-300 hover:text-[#9EFF00]"
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
          className="text-lg text-gray-300 hover:text-[#9EFF00] transition"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        {/* Contact Button */}
        <Link
          href="#contact"
          className="hidden md:inline-flex px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-2xl text-gray-200"
        >
          ☰
        </button>
      </div>
    </div>}

      {/* ✅ Mobile Menu (your structure, improved color) */}
      {open && (
        <div className="fixed z-50 flex min-w-full min-h-full md:hidden bg-black transition-all duration-300">
          
          {/* Sidebar */}
          <aside className="relative flex flex-col min-w-full min-h-full max-w-full bg-[#020617] shadow-2xl border-r border-[#1e293b]">
            
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1e293b]">
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
                className="text-3xl text-gray-400 hover:text-[#9EFF00]"
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
                        ? "bg-[#9EFF00]/10 text-[#9EFF00] border border-[#9EFF00]/30"
                        : "text-gray-300 hover:bg-[#9EFF00]/5 hover:text-[#9EFF00]"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              {/* Contact */}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#9EFF00] text-white text-center font-bold shadow-lg hover:from-[#1d4ed8] hover:to-[#84cc16] transition"
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