"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SunIcon() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored === "dark" || (!stored && prefersDark) ? "dark" : "light";
    setTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-5 flex items-center justify-between pointer-events-auto">

        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-bold text-lg tracking-tight text-off-white dark:text-off-white hover:text-accent transition-colors"
        >
          JAO
        </button>

        {/* Island pill — desktop only */}
        <nav
          className="hidden md:flex items-center gap-1 px-5 py-2.5 rounded-full bg-charcoal/80 dark:bg-charcoal/90 backdrop-blur-md border border-white/10 shadow-lg"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="px-3 py-1 rounded-full text-sm font-semibold text-accent hover:bg-white/10 transition-all duration-200"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full text-off-white/70 hover:text-accent hover:bg-white/10 transition-all"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors shadow-md shadow-accent/30"
          >
            Get in Touch
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-off-white"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen ? (
                <path d="M4 4l14 14M4 18L18 4" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu — full dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 rounded-2xl bg-charcoal/95 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden pointer-events-auto"
          >
            <ul className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold text-accent hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full px-4 py-2.5 rounded-full bg-accent text-white text-sm font-semibold hover:bg-accent-hover transition-colors text-center"
                >
                  Get in Touch
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
