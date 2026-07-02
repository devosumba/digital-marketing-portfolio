"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  // PLACEHOLDER: Replace numbers with real/updated figures
  { value: "45%", label: "Engagement Growth at Sheth Naturals" },
  { value: "2+", label: "Industries Mastered" },
  { value: "8", label: "Marketing Channels Managed" },
  { value: "50+", label: "Campaigns Delivered" }, // PLACEHOLDER: Update with actual count
];

const highlights = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Head of Digital Marketing",
    org: "Sheth Naturals",
    text: "Owned multi-channel content calendars across social, website, newsletters, and community. Grew online engagement 45% through optimized content, influencer collaborations, and UGC campaigns. Ran Meta Ads with structured performance reporting.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Digital Marketing Lead",
    org: "Volkswagen Rwanda",
    text: "Executed multi-channel campaigns within strict global brand guidelines. Managed showroom event marketing and vehicle launch campaigns end-to-end. Coordinated across regional leadership, sales, operations, and external creative agencies.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Working Style",
    org: "How I operate",
    text: "Thrives wearing many hats — tech-savvy, detail-oriented, data-comfortable. Fluent in SEO vs SEM, proficient in Canva and Adobe Creative Suite. Produces senior-level presentations and marketing reports, and is passionate about community-building.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-pad bg-off-white dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-terra font-medium">About</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2 leading-tight max-w-2xl">
            The marketer behind the metrics
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Narrative bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-charcoal/80 dark:text-off-white/70 leading-relaxed">
              I&apos;m a Digital Marketing & Communications Specialist based in{" "}
              <strong className="text-charcoal dark:text-off-white">Nairobi, Kenya</strong>, with a track record of building brands that people genuinely connect with.
            </p>
            <p className="text-base text-charcoal/70 dark:text-off-white/60 leading-relaxed">
              My career spans two distinct but complementary worlds: the disciplined, globally regulated environment of automotive marketing at <strong className="text-charcoal dark:text-off-white">Volkswagen Rwanda</strong>, and the fast-paced, entrepreneurial energy of D2C growth at <strong className="text-charcoal dark:text-off-white">Sheth Naturals</strong>. Each shaped how I approach every brief — with both creative ambition and operational rigour.
            </p>
            <p className="text-base text-charcoal/70 dark:text-off-white/60 leading-relaxed">
              I&apos;m equally comfortable writing copy, pulling a performance report, briefing a videographer, managing vendor relationships, and presenting strategy to leadership — because great marketing rarely lives in one lane. I synthesize market research, member feedback, and platform data into clear, actionable strategy that moves the needle.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-accent dark:text-accent-hover font-medium text-sm group"
              >
                Let&apos;s talk about your next campaign
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Right: Experience highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-xl border border-border dark:border-border-dark bg-surface/50 dark:bg-surface-dark hover:border-accent/30 dark:hover:border-accent/40 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-charcoal dark:text-off-white text-sm">{item.title}</h3>
                      <span className="text-xs text-terra font-medium px-2 py-0.5 rounded-full bg-terra/10 dark:bg-terra/20">{item.org}</span>
                    </div>
                    <p className="text-sm text-charcoal/70 dark:text-off-white/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-border dark:bg-border-dark rounded-2xl overflow-hidden border border-border dark:border-border-dark"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-off-white dark:bg-charcoal px-8 py-8 text-center hover:bg-surface dark:hover:bg-surface-dark transition-colors"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-xs text-muted dark:text-gray-400 font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
