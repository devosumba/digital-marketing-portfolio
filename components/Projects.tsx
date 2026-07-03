"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Campaigns" | "Video/UGC" | "Design" | "Enterprise";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  tags: string[];
  coverColor: string;
  thumbnail?: string;
  challenge: string;
  approach: string;
  execution: string;
  results: string;
  mediaType: "images" | "video" | "videos";
  // PLACEHOLDER: videoUrl, imageUrls will be filled with real assets
  videoUrl?: string;
  imageCount?: number;
  videoCount?: number;
}

const projects: Project[] = [
  {
    id: "naivas",
    title: "Naivas Campaign",
    subtitle: "Retail Campaign — Brand Awareness & Activation",
    category: "Campaigns",
    tags: ["Retail", "Brand Awareness", "Social Media"],
    coverColor: "from-green-900/20 to-emerald-600/10",
    thumbnail: "/images/projects/naivas.png",
    challenge:
      "PLACEHOLDER: Describe the marketing challenge faced for the Naivas campaign — e.g., driving footfall, seasonal awareness, competitive context.",
    approach:
      "PLACEHOLDER: Explain the strategic approach — channel mix, audience targeting, creative direction, and key messaging decisions.",
    execution:
      "PLACEHOLDER: Detail how the campaign was executed — content formats produced, media placements, influencer involvement, timeline.",
    results:
      "PLACEHOLDER: Share measurable outcomes — reach, engagement, sales lift, or other KPIs. Add real figures here.",
    mediaType: "images",
    imageCount: 4, // PLACEHOLDER: Replace with actual image gallery
  },
  {
    id: "bestlady",
    title: "Bestlady Campaign",
    subtitle: "Beauty & Retail Campaign — Community & Conversion",
    category: "Campaigns",
    tags: ["Beauty", "Retail", "Community", "Conversion"],
    coverColor: "from-rose-900/20 to-pink-500/10",
    challenge:
      "PLACEHOLDER: Describe the specific challenge for Bestlady — audience positioning, competitive market, conversion goals.",
    approach:
      "PLACEHOLDER: Outline the strategy — creative concept, platform selection, content pillars, and brand voice.",
    execution:
      "PLACEHOLDER: Walk through the execution — content types, posting cadence, paid amplification, partnerships.",
    results:
      "PLACEHOLDER: List campaign results — engagement rate, follower growth, conversion metrics, or revenue impact.",
    mediaType: "images",
    imageCount: 4, // PLACEHOLDER: Replace with actual campaign creatives
  },
  {
    id: "enterprise-ad",
    title: "Enterprise Professional Ad",
    subtitle: "Enterprise Video Advertisement — B2B Brand Film",
    category: "Enterprise",
    tags: ["Enterprise", "Video Production", "B2B"],
    coverColor: "from-slate-900/30 to-blue-800/10",
    challenge:
      "PLACEHOLDER: Describe the enterprise brief — target audience (corporate buyers, decision-makers), desired brand perception, and production constraints.",
    approach:
      "PLACEHOLDER: Explain creative strategy — tone of voice, visual language, storytelling structure, and how it ladders to brand positioning.",
    execution:
      "PLACEHOLDER: Describe the production process — pre-production, shoot details, post-production, distribution channels.",
    results:
      "PLACEHOLDER: Share performance metrics — views, engagement, lead generation, or brand lift data.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/PLACEHOLDER_VIDEO_ID", // PLACEHOLDER: Replace with actual YouTube video ID
  },
  {
    id: "back-to-school",
    title: "Back-to-School Campaign",
    subtitle: "Seasonal Multi-Channel Campaign — Awareness & Sales",
    category: "Campaigns",
    tags: ["Seasonal", "Multi-Channel", "Education"],
    coverColor: "from-amber-900/20 to-yellow-600/10",
    challenge:
      "PLACEHOLDER: Define the seasonal challenge — competitive window, audience (parents/students), budget or timeline constraints.",
    approach:
      "PLACEHOLDER: Describe the multi-channel strategy — which channels were prioritized and why, content themes, messaging hierarchy.",
    execution:
      "PLACEHOLDER: Detail channel breakdown — social posts, email newsletters, paid ads, in-store or OOH elements, influencer content.",
    results:
      "PLACEHOLDER: Campaign outcomes — reach, sales uplift, newsletter open rates, conversion data.",
    mediaType: "images",
    imageCount: 3, // PLACEHOLDER: Replace with actual campaign assets
  },
  {
    id: "bts-design",
    title: "Back-to-School Asset Design",
    subtitle: "Promotional Design Showcase — Print & Digital Collateral",
    category: "Design",
    tags: ["Graphic Design", "Print", "Digital", "Canva", "Adobe"],
    coverColor: "from-violet-900/20 to-purple-500/10",
    challenge:
      "PLACEHOLDER: Explain the design brief — brand guidelines to follow, formats needed (posters, social creatives, flyers), and production timeline.",
    approach:
      "PLACEHOLDER: Describe the design approach — colour palette, typography, layout decisions, and how assets were adapted across formats.",
    execution:
      "PLACEHOLDER: List deliverables produced — number of posters, social creatives, print sizes, and tools used (Canva, Adobe Illustrator/Photoshop).",
    results:
      "PLACEHOLDER: Note the impact — how designs performed in paid ads, print runs, or stakeholder approval.",
    mediaType: "images",
    imageCount: 6, // PLACEHOLDER: Replace with actual design files/exports
  },
  {
    id: "ugc-videos",
    title: "UGC Video Reel",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Community", "Influencer"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "PLACEHOLDER: Describe the UGC challenge — how to source authentic content at scale, maintain brand consistency, and drive performance.",
    approach:
      "PLACEHOLDER: Explain the UGC strategy — creator briefs, incentive structure, content guidelines, and curation process.",
    execution:
      "PLACEHOLDER: Detail the execution — number of creators involved, content formats, review/approval workflow, and distribution.",
    results:
      "PLACEHOLDER: UGC performance data — views, shares, conversion impact, cost-per-engagement vs. branded content.",
    mediaType: "videos",
    videoCount: 4, // PLACEHOLDER: Replace with actual UGC video embed URLs
  },
];

const categories: Category[] = ["All", "Campaigns", "Video/UGC", "Design", "Enterprise"];

function PlaceholderMedia({ project }: { project: Project }) {
  if (project.mediaType === "video") {
    return (
      <div className="rounded-xl overflow-hidden bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark">
        <div className="relative" style={{ paddingBottom: "56.25%" }}>
          {/* PLACEHOLDER: Replace src with actual YouTube embed URL */}
          {project.videoUrl?.includes("PLACEHOLDER") ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-charcoal/5 dark:bg-off-white/5">
              <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                <svg width="24" height="24" fill="#1A4A3A" viewBox="0 0 24 24">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </div>
              <p className="text-xs text-muted dark:text-gray-400">Video placeholder — add YouTube URL in projects data</p>
            </div>
          ) : (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={project.videoUrl}
              title={project.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    );
  }

  if (project.mediaType === "videos") {
    return (
      <div className="grid grid-cols-2 gap-3">
        {Array.from({ length: project.videoCount || 2 }).map((_, i) => (
          <div
            key={i}
            className="aspect-[9/16] rounded-xl bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark flex flex-col items-center justify-center gap-2"
          >
            {/* PLACEHOLDER: Replace with actual UGC video embeds */}
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
              <svg width="18" height="18" fill="#1A4A3A" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
            <p className="text-[10px] text-muted dark:text-gray-500 text-center px-2">UGC Video {i + 1}</p>
          </div>
        ))}
      </div>
    );
  }

  // Images / design gallery
  const remaining = (project.imageCount || 2) - (project.thumbnail ? 1 : 0);
  return (
    <div className="grid grid-cols-2 gap-3">
      {project.thumbnail && (
        <div className="col-span-2 relative aspect-[4/3] rounded-xl bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark overflow-hidden">
          <Image
            src={project.thumbnail}
            alt={`${project.title} campaign asset`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 640px"
          />
        </div>
      )}
      {Array.from({ length: Math.max(remaining, 0) }).map((_, i) => (
        <div
          key={i}
          className="aspect-[4/3] rounded-xl bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark flex flex-col items-center justify-center gap-2"
        >
          {/* PLACEHOLDER: Replace with actual <Image> components or <img> tags */}
          <svg width="24" height="24" fill="none" stroke="#6B7280" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className="text-[10px] text-muted dark:text-gray-500 text-center px-2">Image {i + 1} placeholder</p>
        </div>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-charcoal/60 dark:bg-charcoal/80 backdrop-blur-sm p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl my-4 bg-off-white dark:bg-charcoal rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className={`relative h-40 bg-gradient-to-br ${project.coverColor} dark:opacity-80 flex items-end p-6`}>
            <div>
              <span className="text-xs font-medium text-muted dark:text-gray-400 uppercase tracking-widest">
                {project.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal dark:text-off-white mt-1">
                {project.title}
              </h2>
              <p className="text-sm text-muted dark:text-gray-400 mt-1">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-charcoal/10 dark:bg-off-white/10 flex items-center justify-center hover:bg-charcoal/20 dark:hover:bg-off-white/20 transition-colors"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-surface dark:bg-surface-dark text-muted dark:text-gray-400 border border-border dark:border-border-dark"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Case study sections */}
            {[
              { label: "Challenge", content: project.challenge },
              { label: "Approach", content: project.approach },
              { label: "Execution", content: project.execution },
              { label: "Results", content: project.results },
            ].map((section) => (
              <div key={section.label}>
                <h3 className="text-xs uppercase tracking-widest text-terra font-medium mb-2">{section.label}</h3>
                <p className="text-sm text-charcoal/80 dark:text-off-white/70 leading-relaxed">{section.content}</p>
              </div>
            ))}

            {/* Media gallery */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-terra font-medium mb-3">Media</h3>
              <PlaceholderMedia project={project} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group text-left w-full rounded-2xl overflow-hidden border border-border dark:border-border-dark bg-off-white dark:bg-charcoal hover:border-accent/40 dark:hover:border-accent/50 hover:shadow-xl transition-all duration-300"
    >
      {/* Cover */}
      <div
        className={`h-44 bg-gradient-to-br ${project.coverColor} relative overflow-hidden flex items-end p-5`}
      >
        {project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        <span className="relative text-xs font-medium text-muted dark:text-gray-400 uppercase tracking-wider px-2 py-1 rounded-full bg-off-white/80 dark:bg-charcoal/80 backdrop-blur-sm">
          {project.category}
        </span>
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-accent/20 dark:bg-accent/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <svg width="14" height="14" fill="none" stroke="#1A4A3A" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-charcoal dark:text-off-white group-hover:text-accent dark:group-hover:text-accent-hover transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-muted dark:text-gray-400 leading-snug">{project.subtitle}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full bg-surface dark:bg-surface-dark text-muted dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-pad bg-off-white dark:bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs uppercase tracking-widest text-terra font-medium">Featured Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal dark:text-off-white mt-2 leading-tight">
            Campaigns & Projects
          </h2>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-accent text-off-white shadow-md shadow-accent/20"
                  : "bg-surface dark:bg-surface-dark text-muted dark:text-gray-400 hover:text-charcoal dark:hover:text-off-white hover:bg-border dark:hover:bg-border-dark"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
