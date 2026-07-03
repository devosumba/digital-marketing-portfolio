"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-pad bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-terra font-medium">Contact</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2 leading-tight">
            Let&apos;s build something great
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl space-y-8"
        >
          <p className="text-lg text-charcoal/80 dark:text-off-white/70 leading-relaxed">
            Whether you have a campaign to launch, a brand to grow, or a team that needs a skilled marketing hand — I&apos;d love to hear from you.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <a
              href="mailto:johnaustineosumba@gmail.com"
              className="flex items-center gap-4 p-4 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 font-medium">Email</p>
                <p className="text-sm font-semibold text-charcoal dark:text-off-white group-hover:text-accent dark:group-hover:text-accent-hover transition-colors">
                  johnaustineosumba@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/john-austine-osumba-689327207/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 font-medium">LinkedIn</p>
                <p className="text-sm font-semibold text-charcoal dark:text-off-white group-hover:text-accent dark:group-hover:text-accent-hover transition-colors">
                  John Austine Osumba
                </p>
              </div>
            </a>

            <a
              href="https://wa.me/16462097213"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center gap-4 p-4 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.6 6.32A7.85 7.85 0 0012.05 4c-4.35 0-7.85 3.5-7.85 7.85 0 1.38.36 2.72 1.05 3.9L4 20l4.35-1.14a7.83 7.83 0 003.7.94c4.34 0 7.85-3.5 7.85-7.85 0-2.1-.82-4.07-2.3-5.53zm-5.55 12.07a6.52 6.52 0 01-3.32-.91l-.24-.14-2.47.65.66-2.41-.16-.25a6.53 6.53 0 01-1-3.48 6.54 6.54 0 016.54-6.54c1.75 0 3.39.68 4.63 1.92a6.5 6.5 0 011.92 4.63c0 3.61-2.94 6.53-6.56 6.53zm3.59-4.9c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.62.77-.11.13-.23.14-.43.05-.2-.1-.83-.31-1.58-.98-.58-.52-.98-1.16-1.09-1.36-.11-.2-.01-.3.09-.4.09-.09.2-.23.3-.35.1-.11.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34-.11 0-.24 0-.37 0-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.63 0 .96.7 1.89.8 2.02.1.13 1.38 2.11 3.35 2.96.47.2.83.32 1.12.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.33-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 font-medium">WhatsApp</p>
                <p className="text-sm font-semibold text-charcoal dark:text-off-white group-hover:text-accent dark:group-hover:text-accent-hover transition-colors">
                  Chat with me
                </p>
              </div>
            </a>

            <a
              href="tel:+254704870276"
              aria-label="Call phone number"
              className="flex items-center gap-4 p-4 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 011.11 4.18 2 2 0 013.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted dark:text-gray-400 font-medium">Call</p>
                <p className="text-sm font-semibold text-charcoal dark:text-off-white group-hover:text-accent dark:group-hover:text-accent-hover transition-colors">
                  Give me a call
                </p>
              </div>
            </a>
          </div>

          {/* Download CV */}
          <div className="pt-2">
            {/* PLACEHOLDER: Replace href with actual CV file URL once uploaded to /public/cv-john-austine-osumba.pdf */}
            <a
              href="/cv-john-austine-osumba.pdf" // PLACEHOLDER: Replace with actual CV file path or URL
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-charcoal dark:border-off-white text-charcoal dark:text-off-white font-medium text-sm hover:bg-charcoal hover:text-off-white dark:hover:bg-off-white dark:hover:text-charcoal transition-all"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
