"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-off-white dark:bg-charcoal"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Large circle accent */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full bg-terra/5 dark:bg-terra/10 blur-3xl" />
        {/* Grid lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1A4A3A" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 dark:bg-accent/20 text-accent text-xs font-medium tracking-wide mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-charcoal dark:text-off-white mb-6"
            >
              John{" "}
              <span className="gradient-text">Austine</span>
              <br />
              Osumba
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-lg md:text-xl font-medium text-muted dark:text-gray-400 mb-4"
            >
              Digital Marketing & Communications Specialist
            </motion.p>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-base md:text-lg text-charcoal/80 dark:text-off-white/70 leading-relaxed max-w-xl mb-10"
            >
              I build brands people connect with. From globally regulated automotive marketing at{" "}
              <strong className="text-charcoal dark:text-off-white">Volkswagen Rwanda</strong> to fast-moving D2C growth at{" "}
              <strong className="text-charcoal dark:text-off-white">Sheth Naturals</strong> — content, campaigns, paid media, and community.
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="px-6 py-3 rounded-full bg-accent text-off-white font-medium hover:bg-accent-hover transition-colors shadow-lg shadow-accent/20"
              >
                View Work
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                className="px-6 py-3 rounded-full border-2 border-charcoal dark:border-off-white text-charcoal dark:text-off-white font-medium hover:bg-charcoal hover:text-off-white dark:hover:bg-off-white dark:hover:text-charcoal transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>

            {/* Location badge */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="flex items-center gap-2 mt-8 text-sm text-muted dark:text-gray-400"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Nairobi, Kenya
            </motion.div>
          </div>

          {/* Portrait / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Accent ring */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-accent/20 dark:border-accent/30 rotate-3" />
              <div className="absolute -inset-6 rounded-2xl border border-terra/10 dark:border-terra/20 -rotate-2" />

              {/* PLACEHOLDER: Replace the div below with an actual <img> or next/image of your portrait */}
              {/* Example: <Image src="/portrait.jpg" alt="John Austine Osumba" fill className="object-cover rounded-xl" /> */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 via-surface to-terra/10 dark:from-accent/30 dark:via-surface-dark dark:to-terra/20 flex flex-col items-center justify-center gap-3 border border-border dark:border-border-dark">
                <div className="w-16 h-16 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center">
                  <svg width="32" height="32" fill="none" stroke="#1A4A3A" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="text-xs text-muted dark:text-gray-400 font-medium">Portrait Placeholder</p>
                <p className="text-[10px] text-muted/60 dark:text-gray-500 px-4 text-center">Replace with actual photo in /public/portrait.jpg</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted dark:text-gray-500">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-muted to-transparent animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
}
