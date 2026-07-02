"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    title: "Digital Strategy & Content Calendars",
    description: "End-to-end content planning across social, website, newsletters, and community — aligned to brand objectives and audience insight.",
    color: "accent",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Social Media & Community Management",
    description: "Building engaged communities through consistent, on-brand storytelling, conversation, and platform-native content formats.",
    color: "terra",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3 4-4 3 3" />
      </svg>
    ),
    title: "Paid Media (Meta Ads) & Performance Reporting",
    description: "Structured Meta Ads campaigns from creative brief to audience targeting to performance analysis — with clear, senior-level reporting.",
    color: "accent",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
      </svg>
    ),
    title: "SEO & Website Management",
    description: "Owning website content end-to-end: on-page SEO, content optimization, CMS management, and conversion-focused copy.",
    color: "terra",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M15 10l-4 4-2-2-4 4" />
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M8 12h.01M12 8h.01" />
      </svg>
    ),
    title: "Influencer & UGC Campaigns",
    description: "Identifying and briefing influencers, coordinating UGC content, and turning authentic customer voices into performance-driving assets.",
    color: "accent",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Brand Communications & Collateral Design",
    description: "Producing marketing decks, brochures, promotional materials, and brand-aligned visual assets using Canva and Adobe Creative Suite.",
    color: "terra",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: "Event & Launch Marketing",
    description: "Showroom event planning, product launch campaigns, and in-person experience marketing — from concept through execution.",
    color: "accent",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20v-12M22 4v16" />
      </svg>
    ),
    title: "Market Research & Insights",
    description: "Synthesizing member feedback, competitor analysis, and market trends into actionable strategy that informs both creative and commercial decisions.",
    color: "terra",
  },
];

export default function Expertise() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="expertise" className="section-pad bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="text-xs uppercase tracking-widest text-terra font-medium">Expertise</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2 leading-tight">
              What I bring to the table
            </h2>
          </div>
          <p className="text-base text-muted dark:text-gray-400 max-w-xs leading-relaxed">
            Eight areas where I deliver measurable impact for brands and organizations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group p-6 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                  service.color === "accent"
                    ? "bg-accent/10 dark:bg-accent/20 text-accent"
                    : "bg-terra/10 dark:bg-terra/20 text-terra"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="font-semibold text-charcoal dark:text-off-white text-sm leading-snug mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-muted dark:text-gray-400 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
