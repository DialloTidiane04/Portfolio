"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Projets", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "À propos", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="group flex items-center"
        >
          <span className="text-4xl font-black tracking-tight text-white transition-all duration-300 group-hover:scale-105">
            TD
          </span>

          <span className="text-4xl font-black text-blue-500">
            .
          </span>
        </Link>

        {/* Navigation Desktop */}

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-all duration-300 hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Bouton */}

        <a
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 md:inline-flex"
        >
          Me contacter
        </a>

        {/* Bouton Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Menu Mobile */}

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 md:hidden">
          <nav className="flex flex-col p-6">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-slate-300 transition hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Me contacter
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}