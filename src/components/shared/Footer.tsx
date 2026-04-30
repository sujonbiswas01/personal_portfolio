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
    <footer className="bg-[#080b1a] text-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center py-4 px-2">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/images/sujon_logo.png"
                alt="Logo"
                width={28}
                height={28}
                className="object-contain rounded-full border border-gray-700 mr-3"
                priority
              />
            </Link>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 flex justify-center">
            <ul className="flex space-x-6 text-xs md:text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-end gap-1 mt-6">
            <div className="flex gap-6 items-center">
             
              <a
                href="https://www.instagram.com/sujonbiswaseng"
                className="text-xl text-white border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/sujonbiswaseng"
                className="text-xl text-white border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/sujonbiswas2025/"
                className="text-xl text-white border-none outline-none cursor-pointer transition-transform hover:scale-110"
              >
                <FaFacebook />
              </a>
              <a
                className="text-xl text-white border-none outline-none cursor-pointer transition-transform hover:scale-110"
                href="https://www.youtube.com/@nextgenprogrammer01"
              >
                <FaYoutube />
              </a>
              <a
                className="text-xl text-white border-none outline-none cursor-pointer transition-transform hover:scale-110"
                href="https://github.com/sujonbiswaseng"
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