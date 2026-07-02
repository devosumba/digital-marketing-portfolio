"use client";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal dark:bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold mb-3">John Austine Osumba</p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Digital Marketing & Communications Specialist. Nairobi, Kenya.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-gray-400 hover:text-off-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-medium mb-4">Get in Touch</p>
            <div className="space-y-2">
              <a
                href="mailto:austineosumba@gmail.com"
                className="block text-sm text-gray-400 hover:text-off-white transition-colors"
              >
                austineosumba@gmail.com
              </a>
              <a
                href="https://linkedin.com/in/john-austine-osumba-689327207"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-off-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn
              </a>
            </div>

            {/* PLACEHOLDER: Add download link when CV is ready */}
            <a
              href="/cv-john-austine-osumba.pdf"
              download
              className="inline-flex items-center gap-1.5 mt-4 text-xs text-gray-500 hover:text-gray-300 transition-colors"
            >
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            &copy; {year} John Austine Osumba. All rights reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
