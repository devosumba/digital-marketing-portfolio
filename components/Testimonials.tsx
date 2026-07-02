"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const testimonials = [
  // PLACEHOLDER: Replace with real quotes, names, roles, and companies
  {
    id: 1,
    quote:
      "PLACEHOLDER — Add a testimonial here from a colleague or client. For example: \"John consistently delivered campaigns that exceeded our expectations. His ability to balance creative vision with data-driven decisions is rare and invaluable.\"",
    name: "First Name Last Name", // PLACEHOLDER
    role: "Title, Company", // PLACEHOLDER
    initials: "FL", // PLACEHOLDER
  },
  {
    id: 2,
    quote:
      "PLACEHOLDER — Another testimonial slot. For example: \"Working with John on our Volkswagen campaigns was a pleasure. He understood both the global brand standards and the local market nuances perfectly.\"",
    name: "First Name Last Name", // PLACEHOLDER
    role: "Title, Company", // PLACEHOLDER
    initials: "FL", // PLACEHOLDER
  },
  {
    id: 3,
    quote:
      "PLACEHOLDER — A third testimonial. For example: \"John's content strategy transformed our social media presence at Sheth Naturals. The 45% engagement growth speaks for itself.\"",
    name: "First Name Last Name", // PLACEHOLDER
    role: "Title, Company", // PLACEHOLDER
    initials: "FL", // PLACEHOLDER
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section id="testimonials" className="section-pad bg-off-white dark:bg-charcoal">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest text-terra font-medium">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2">
            What people say
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Quote mark */}
          <div className="text-accent/10 dark:text-accent/20 font-display text-[120px] leading-none absolute -top-8 -left-4 select-none pointer-events-none">
            &ldquo;
          </div>

          <div className="relative min-h-[200px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <blockquote className="text-xl md:text-2xl text-charcoal dark:text-off-white leading-relaxed font-medium mb-8 relative z-10">
                  {testimonials[current].quote}
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center font-semibold text-accent text-sm">
                    {testimonials[current].initials}
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal dark:text-off-white text-sm">
                      {testimonials[current].name}
                    </p>
                    <p className="text-xs text-muted dark:text-gray-400">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-10">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border dark:border-border-dark flex items-center justify-center text-charcoal dark:text-off-white hover:bg-accent hover:text-off-white hover:border-accent transition-all"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-accent" : "w-1.5 bg-border dark:bg-border-dark"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-border dark:border-border-dark flex items-center justify-center text-charcoal dark:text-off-white hover:bg-accent hover:text-off-white hover:border-accent transition-all"
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
