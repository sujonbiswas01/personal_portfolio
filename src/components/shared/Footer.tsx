"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="app-shell py-6">
        <div className="flex flex-col gap-4 sm:gap-5 md:flex-row md:items-center md:justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/sujon_logo.png"
                alt="Logo"
                width={28}
                height={28}
                className="object-contain rounded-full border border-border mr-3"
                priority
              />
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs md:text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex gap-4 sm:gap-5 items-center">
             
              <a
                href="https://www.instagram.com/sujonbiswas01"
                className="text-xl text-muted-foreground hover:text-primary border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/sujonbiswas001"
                className="text-xl text-muted-foreground hover:text-primary border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/sujonbiswas001/"
                className="text-xl text-muted-foreground hover:text-primary border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                className={`
                  text-xl 
                  border-none outline-none cursor-pointer
                  transition-transform hover:scale-110
                  text-muted-foreground hover:text-primary
                  dark:text-white dark:hover:text-primary
                `}
                href="https://www.youtube.com/@nextgenprogrammer01"
              >
                <FaYoutube />
              </a>
         
              <a
                className="text-xl text-muted-foreground hover:text-primary border-none outline-none cursor-pointer transition-transform hover:scale-110"
                href="https://github.com/sujonbiswas01"
              >
                <FaGithub />
              </a>
              {/* Keyframes for slow spin animation */}
              <style>
                {`
                  @keyframes spin-slow {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                  }
                  .animate-spin-slow {
                    animation: spin-slow 2.4s linear infinite;
                  }
                `}
              </style>
            </div>
      
          
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;