"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    // PLACEHOLDER: Replace with your actual form submission endpoint (Formspree, Netlify Forms, etc.)
    // Example: await fetch("https://formspree.io/f/YOUR_ID", { method: "POST", body: JSON.stringify(form) })
    await new Promise((r) => setTimeout(r, 1200)); // Simulated delay
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof form]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-lg text-charcoal/80 dark:text-off-white/70 leading-relaxed">
              Whether you have a campaign to launch, a brand to grow, or a team that needs a skilled marketing hand — I&apos;d love to hear from you.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:austineosumba@gmail.com"
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
                    austineosumba@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/john-austine-osumba-689327207"
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

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-off-white dark:bg-charcoal border border-border dark:border-border-dark text-center"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 dark:bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" fill="none" stroke="#1A4A3A" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-charcoal dark:text-off-white mb-2">
                  Message received!
                </h3>
                <p className="text-sm text-muted dark:text-gray-400">
                  Thank you for reaching out. I&apos;ll get back to you within 24–48 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-charcoal dark:text-off-white uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-xl bg-off-white dark:bg-charcoal border text-charcoal dark:text-off-white placeholder:text-muted/50 dark:placeholder:text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${
                      errors.name ? "border-red-400" : "border-border dark:border-border-dark"
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-charcoal dark:text-off-white uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-off-white dark:bg-charcoal border text-charcoal dark:text-off-white placeholder:text-muted/50 dark:placeholder:text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all ${
                      errors.email ? "border-red-400" : "border-border dark:border-border-dark"
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-charcoal dark:text-off-white uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or what you're looking for..."
                    className={`w-full px-4 py-3 rounded-xl bg-off-white dark:bg-charcoal border text-charcoal dark:text-off-white placeholder:text-muted/50 dark:placeholder:text-gray-600 text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 transition-all resize-none ${
                      errors.message ? "border-red-400" : "border-border dark:border-border-dark"
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-accent text-off-white font-semibold text-sm hover:bg-accent-hover transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin" width="16" height="16" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
