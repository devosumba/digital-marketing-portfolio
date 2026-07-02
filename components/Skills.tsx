"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = [
  {
    name: "Meta Ads Manager",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
      </svg>
    ),
    category: "Paid Media",
  },
  {
    name: "Google Analytics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.84 2.998C22.84 1.343 21.497 0 19.842 0c-1.655 0-2.998 1.343-2.998 2.998v18.004C16.844 22.657 18.187 24 19.842 24s2.998-1.343 2.998-2.998V2.998zm-8.994 7C13.846 8.343 12.503 7 10.848 7c-1.655 0-2.998 1.343-2.998 2.998v11.004C7.85 22.657 9.193 24 10.848 24s2.998-1.343 2.998-2.998V9.998zM4.998 14C3.343 14 2 15.343 2 17c0 1.657 1.343 3 2.998 3s2.998-1.343 2.998-3c0-1.657-1.343-3-2.998-3z" />
      </svg>
    ),
    category: "Analytics",
  },
  {
    name: "SEO / SEM",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M8 11h6M11 8v6" />
      </svg>
    ),
    category: "Search",
  },
  {
    name: "Canva",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.25 16.518c-1.148.666-2.427-.31-2.427-1.654V9.136c0-1.344 1.279-2.32 2.427-1.654l5.102 2.864c1.148.666 1.148 2.306 0 2.972l-5.102 2.2z" />
      </svg>
    ),
    category: "Design",
  },
  {
    name: "Adobe Creative Suite",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM.707 0l7.545 16.83L0 19.71zm23.288 0l-7.545 16.83 7.545 2.881z" />
      </svg>
    ),
    category: "Design",
  },
  {
    name: "PowerPoint",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12.5 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V11.5" />
        <path d="M22 2L12 12M15 2h7v7" />
      </svg>
    ),
    category: "Presentations",
  },
  {
    name: "Email / Mailchimp",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    category: "Email Marketing",
  },
  {
    name: "CMS / Web Management",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9,22 9,12 15,12 15,22" />
      </svg>
    ),
    category: "Web",
  },
];

const softSkills = [
  "Multi-channel Campaign Management",
  "Vendor & Agency Coordination",
  "Market Research & Synthesis",
  "Senior-Level Presentations",
  "Community Building",
  "Performance Reporting",
  "Cross-functional Collaboration",
  "Brand Guidelines & Stewardship",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-pad bg-surface dark:bg-surface-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-terra font-medium">Tools & Skills</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2 leading-tight">
            In my toolkit
          </h2>
        </motion.div>

        {/* Tool badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              className="flex flex-col items-center gap-3 p-5 rounded-xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark hover:border-accent/40 dark:hover:border-accent/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group cursor-default"
            >
              <div className="text-accent dark:text-accent-hover group-hover:scale-110 transition-transform duration-300">
                {tool.icon}
              </div>
              <div className="text-center">
                <p className="text-xs font-semibold text-charcoal dark:text-off-white leading-tight">{tool.name}</p>
                <p className="text-[10px] text-muted dark:text-gray-500 mt-0.5">{tool.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills / capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-sm font-semibold text-charcoal dark:text-off-white mb-5 uppercase tracking-wider">
            Core Capabilities
          </h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                className="px-4 py-2 rounded-full text-sm border-2 border-accent/20 dark:border-accent/30 text-charcoal dark:text-off-white hover:border-accent hover:bg-accent/5 dark:hover:bg-accent/10 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
