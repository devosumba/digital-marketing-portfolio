"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FF8A33" strokeWidth="1" />
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
              className="font-display whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight text-charcoal dark:text-off-white mb-6"
            >
              John <span className="gradient-text">Austine</span> Osumba
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

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-80 md:w-[400px] md:h-[480px]">
              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-2xl border-2 border-accent/30 dark:border-accent/40 rotate-2" />
              <div className="absolute -inset-6 rounded-2xl border border-accent/10 dark:border-accent/20 -rotate-1" />

              {/* Portrait image — saved at public/images/hero.jpg */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero.jpg"
                  alt="John Austine Osumba, Digital Marketing & Communications Specialist"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 288px, 400px"
                />
              </div>

              {/* Floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 md:-left-8 bg-off-white dark:bg-surface-dark rounded-xl px-4 py-3 shadow-lg border border-border dark:border-border-dark flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-accent/15 dark:bg-accent/25 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" fill="none" stroke="#FF8A33" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-muted dark:text-gray-400 leading-none mb-0.5">Engagement Growth</p>
                  <p className="text-sm font-bold text-charcoal dark:text-off-white leading-none">+45%</p>
                </div>
              </motion.div>

              {/* Top-right badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-4 -right-4 md:-right-6 bg-accent text-off-white rounded-xl px-3 py-2 shadow-lg shadow-accent/25 text-center"
              >
                <p className="text-[10px] font-medium leading-none mb-0.5 opacity-80">Based in</p>
                <p className="text-xs font-bold leading-none">Nairobi 🇰🇪</p>
              </motion.div>
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
