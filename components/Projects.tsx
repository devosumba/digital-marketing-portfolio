"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";

type Category = "All" | "Campaigns" | "Video/UGC" | "Design" | "Enterprise";

// Plain string assumes a 1:1 source image (matches most campaign assets); pass an
// object with `aspect` (e.g. "1280/1828") when the source isn't square, so the
// gallery tile fits the image tightly instead of letterboxing it.
type GalleryImage = string | { src: string; aspect: string };

function imgSrc(item: GalleryImage): string {
  return typeof item === "string" ? item : item.src;
}

function imgAspect(item: GalleryImage): string {
  return typeof item === "string" ? "1/1" : item.aspect;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<Category, "All">;
  tags: string[];
  coverColor: string;
  thumbnail?: string;
  // Card cover defaults to a square crop (matches most thumbnails); set this when the
  // thumbnail itself isn't square (e.g. "749/421") so the cover fits it with no gap.
  thumbnailAspect?: string;
  // For very tall/narrow thumbnails (e.g. roll-up banner photos): keep the card at the
  // standard cover height (matching sibling cards) and center a width-constrained box
  // sized to thumbnailAspect inside it, instead of letting the aspect ratio drive the
  // whole cover's height.
  thumbnailFit?: "height-centered";
  images?: GalleryImage[];
  // Design showcase pieces (a single collateral project, not a campaign) use a plain
  // `description` instead of the 4-part case-study breakdown below.
  description?: string;
  challenge?: string;
  approach?: string;
  execution?: string;
  results?: string;
  mediaType: "images" | "video" | "videos";
  videoUrl?: string;
  // Real UGC clips — { src, caption } so each tile can show its real filename-derived
  // label without inventing per-video marketing copy.
  videoUrls?: { src: string; caption: string }[];
  imageCount?: number;
  videoCount?: number;
}

const projects: Project[] = [
  {
    id: "back-to-school",
    title: "Back-to-School Campaign",
    subtitle: "Youth-Focused Brand Awareness Campaign",
    category: "Campaigns",
    tags: ["Campaign", "Youth Marketing", "Brand Awareness"],
    coverColor: "from-amber-900/20 to-yellow-600/10",
    thumbnail: "/images/projects/back-to-school/mizizi-school-essentials-cover.png",
    images: [
      "/images/projects/back-to-school/mizizi-school-essentials-cover.png",
      "/images/projects/back-to-school/mizizi-vegetable-glycerine.png",
      "/images/projects/back-to-school/mizizi-rose-water.png",
      "/images/projects/back-to-school/mizizi-sweet-almond-oil.png",
      "/images/projects/back-to-school/mizizi-hemp-seed-oil.png",
      "/images/projects/back-to-school/mizizi-coconut-oil.png",
      "/images/projects/back-to-school/mizizi-shea-butter.png",
      "/images/projects/back-to-school/sheba-school-essentials-cover.png",
      "/images/projects/back-to-school/sheba-instant-conditioner.png",
      "/images/projects/back-to-school/sheba-deep-conditioner.png",
      "/images/projects/back-to-school/sheba-curl-creme.png",
      "/images/projects/back-to-school/sheba-wash-and-go-gel.png",
      "/images/projects/back-to-school/sheba-moisturizing-shampoo-bar.png",
    ],
    challenge:
      "Mizizi and Sheba products are widely used by school-going students, but the brands needed stronger visibility and familiarity across the different age groups and demographic segments within that audience.",
    approach:
      "Built a back-to-school seasonal campaign designed to sensitize and popularize the brands specifically among school-going students, tailoring messaging to resonate across different age groups and demographic segments within that broader youth audience.",
    execution:
      "Rolled out the seasonal campaign through product-offer creatives spanning the full Mizizi and Sheba back-to-school lineup — from Mizizi's natural oils and butters to Sheba's haircare essentials — pairing brand-cover visuals for each label with individual product pricing call-outs to drive both awareness and trial among school-going students.",
    results:
      "The campaign gave Mizizi and Sheba a coordinated seasonal presence across their full back-to-school product lineup, reinforcing familiarity with both brands among school-going students during a key back-to-school shopping window.",
    mediaType: "images",
  },
  {
    id: "naivas",
    title: "Naivas Kikapu Kibonge — Naivas Campaign",
    subtitle: "Retail Campaign — Brand Awareness & Activation",
    category: "Campaigns",
    tags: ["Retail", "Brand Awareness", "Social Media", "UGC", "SMS Marketing"],
    coverColor: "from-green-900/20 to-emerald-600/10",
    thumbnail: "/images/projects/naivas.png",
    challenge:
      "Mizizi and Sheba needed to convert supermarket footfall into product discovery. With the brands newly stocked in Naivas, the priority was making sure shoppers actually knew the products were on shelf and gave them a reason to try them, not just walk past.",
    approach:
      "We joined Naivas' Kikapu Kibonge promotion as a 3-month retail partnership, anchoring the campaign around clear stockist messaging — telling shoppers exactly where to find Mizizi and Sheba, store by store, starting with Naivas Langata Road. The strategy paired store-level visibility with organic proof and direct reach: UGC content to build trust and social credibility, and mass SMS to push the message straight to a wider customer base beyond social media's reach.",
    execution:
      "Designed and rolled out stockist-alert posters for individual Naivas branches, produced UGC content featuring the products in real shopping contexts, and ran a mass SMS campaign to notify existing customers of retail availability. The campaign ran continuously across the 3-month Kikapu Kibonge partnership window, keeping stockist messaging visible in-store while UGC and SMS carried the message beyond the store itself.",
    results:
      "The Kikapu Kibonge partnership strengthened Mizizi and Sheba's visibility across Naivas branches, with stockist-alert messaging, UGC proof, and mass SMS outreach working together to build broader shopper awareness of the brands' in-store availability over the campaign's three-month run.",
    mediaType: "images",
    imageCount: 1, // Only the stockist poster exists — no additional gallery images for this campaign
  },
  {
    id: "bestlady",
    title: "Bestlady Campaign",
    subtitle: "Market Penetration Campaign — Trial & Retention",
    category: "Campaigns",
    tags: ["Beauty & Personal Care", "Retail Partnership", "Brand Trial"],
    coverColor: "from-rose-900/20 to-pink-500/10",
    thumbnail: "/images/projects/bestlady/sheba-curl-creme-500ml.png",
    images: [
      "/images/projects/bestlady/sheba-curl-creme-500ml.png",
      "/images/projects/bestlady/sheba-curl-creme-200ml.png",
      "/images/projects/bestlady/sheba-curl-creme-80ml.png",
      "/images/projects/bestlady/mizizi-vegetable-glycerine.png",
      "/images/projects/bestlady/mizizi-rose-water-small.png",
      "/images/projects/bestlady/mizizi-rose-water-large.png",
      "/images/projects/bestlady/mizizi-vitamin-e-oil.png",
      "/images/projects/bestlady/mizizi-black-castor-oil-small.png",
      "/images/projects/bestlady/mizizi-black-castor-oil-large.png",
      "/images/projects/bestlady/mizizi-shea-butter-200ml.png",
      "/images/projects/bestlady/mizizi-shea-butter-500ml.png",
      "/images/projects/bestlady/mizizi-marula-oil.png",
      "/images/projects/bestlady/mizizi-rosehip-oil.png",
      "/images/projects/bestlady/mizizi-mango-butter.png",
      "/images/projects/bestlady/mizizi-cocoa-butter.png",
    ],
    challenge:
      "Mizizi and Sheba needed to establish credibility as natural beauty products in the Kenyan market — a category where trust and familiarity with a brand heavily influence purchase decisions. Breaking into an already crowded beauty space required getting the products directly into the hands of the right customers.",
    approach:
      "We partnered with Bestlady, one of Kenya's leading beauty retailers, to run a penetration campaign built around trial. Instead of leading with a discount, we offered Bestlady's existing clientele the chance to buy and experience Mizizi and Sheba at a price slightly above factory cost — enough to keep the offer accessible while building genuine familiarity with the products, with the goal of converting first-time buyers into repeat, retained customers.",
    execution:
      "Ran a limited May offer through Bestlady's customer base, positioning Mizizi and Sheba products for trial purchase at the adjusted factory-plus price point. The campaign leaned on Bestlady's established trust with its beauty-focused clientele to lower the barrier to first purchase, using the retailer's existing relationship with customers as the credibility bridge for a newer brand entering the space.",
    results:
      "The May trial offer strengthened Mizizi and Sheba's foothold within Bestlady's clientele, using the retailer's established trust to lower the barrier to first purchase and build a growing base of repeat customers for both brands.",
    mediaType: "images",
  },
  {
    id: "beautyclick",
    title: "Beauty Click Campaign",
    subtitle: "E-commerce Listing Optimization & Vendor Expansion",
    category: "Campaigns",
    tags: ["E-commerce", "Beauty & Personal Care", "Vendor Management", "Digital Marketing"],
    coverColor: "from-fuchsia-900/20 to-purple-500/10",
    thumbnail: "/images/projects/beautyclick/sheba-products-listing.jpg",
    images: [
      "/images/projects/beautyclick/sheba-products-listing.jpg",
      { src: "/images/projects/beautyclick/mizizi-oils-coffee-table.jpg", aspect: "1280/1828" },
      { src: "/images/projects/beautyclick/mizizi-oils-dinner-table.jpg", aspect: "1280/854" },
      { src: "/images/projects/beautyclick/palm-kernel-oil-product-page-closeup.jpg", aspect: "1280/1828" },
      { src: "/images/projects/beautyclick/palm-kernel-oil-product-page-wide.jpg", aspect: "1280/896" },
      { src: "/images/projects/beautyclick/sheba-curl-creme-product-page.jpg", aspect: "1280/1920" },
    ],
    challenge:
      "Beauty Click, one of Kenya's highest-traffic beauty e-commerce platforms, needed its product listings and promotional presence optimized to convert that traffic more effectively, alongside a push to expand the brand's footprint across additional digital vendors.",
    approach:
      "Took ownership of the brand's presence on Beauty Click end-to-end — optimizing product listings for discoverability and conversion, running promotional campaigns on the platform, and identifying and onboarding additional digital vendor channels to expand market reach beyond a single storefront.",
    execution:
      "Audited and optimized existing product listings on Beauty Click, planned and executed promotional campaigns timed to platform traffic, and led outreach and coordination to expand distribution across new digital vendor partners.",
    results:
      "The listing optimization and vendor outreach strengthened Mizizi and Sheba's presence on Beauty Click while extending both brands' reach into additional digital vendor channels beyond the platform.",
    mediaType: "images",
  },
  {
    id: "mydawa",
    title: "My Dawa Campaign",
    subtitle: "Wellness Brand Teaser Campaign",
    category: "Campaigns",
    tags: ["Wellness", "Teaser Campaign", "Brand Awareness"],
    coverColor: "from-red-900/20 to-orange-500/10",
    thumbnail: "/images/projects/mydawa/teaser-red.png",
    images: [
      "/images/projects/mydawa/teaser-red.png",
      "/images/projects/mydawa/teaser-black.png",
      "/images/projects/mydawa/teaser-gray.png",
    ],
    challenge:
      "My Dawa needed to build early awareness and anticipation for its wellness brand ahead of a wider market rollout, without yet revealing the full product line.",
    approach:
      "A teaser-poster-led campaign designed to build anticipation and awareness for the My Dawa wellness brand ahead of wider rollout.",
    execution:
      "Produced and distributed a series of teaser posters as the core creative asset for the campaign.",
    results:
      "The teaser campaign built early brand recognition for My Dawa ahead of its wider rollout, using consistent color-variant posters to keep the brand visually cohesive while sustaining anticipation across the pre-launch window.",
    mediaType: "images",
  },
  {
    id: "enterprise-ad",
    title: "Enterprise Professional Ad — Sheth Naturals",
    subtitle: "YouTube & Google Ads Campaign — Brand Story & Product Range",
    category: "Enterprise",
    tags: ["Video Production", "YouTube Ads", "Google Ads", "Brand Storytelling"],
    coverColor: "from-slate-900/30 to-blue-800/10",
    thumbnail: "https://img.youtube.com/vi/JVnBDc9ovGQ/hqdefault.jpg",
    thumbnailAspect: "480/360",
    challenge:
      "Sheth Naturals needed a brand film that could carry its story and full product range to a wider audience across enterprise-grade video channels — something polished enough to run as paid media, not just organic content.",
    approach:
      "Produced a professional brand video telling the Sheth Naturals story — its history and the breadth of its product array — designed for distribution as a YouTube and Google Ads video campaign, giving the brand a consistent, high-production-value asset for paid reach.",
    execution:
      "Coordinated the production of the brand film covering Sheth Naturals' origin and product range, then deployed it as a paid video campaign across YouTube and the Google Ads network to extend reach beyond owned channels.",
    results:
      "The brand film gave Sheth Naturals a consistent, paid-media-ready asset for telling its story and showcasing its product range, extending the brand's reach beyond its owned channels through YouTube and the Google Ads network.",
    mediaType: "video",
    videoUrl: "https://www.youtube.com/embed/JVnBDc9ovGQ",
  },
  {
    id: "sense-coffee",
    title: "Sense Coffee",
    subtitle: "Brand & Promotional Design",
    category: "Design",
    tags: ["Design", "Brand Collateral"],
    coverColor: "from-emerald-900/20 to-orange-500/10",
    thumbnail: "/images/projects/sense-coffee/coffee-bags-trio.jpg",
    thumbnailAspect: "749/421",
    images: [
      { src: "/images/projects/sense-coffee/coffee-bags-trio.jpg", aspect: "749/421" },
      { src: "/images/projects/sense-coffee/business-cards-flatlay.jpg", aspect: "750/633" },
      { src: "/images/projects/sense-coffee/logo-and-bag.jpg", aspect: "600/338" },
      { src: "/images/projects/sense-coffee/logo-with-coffee-beans.jpg", aspect: "749/421" },
      { src: "/images/projects/sense-coffee/storefront-signage.jpg", aspect: "600/338" },
    ],
    description:
      "Brand identity and promotional design work for Sense Coffee, spanning packaging design across its coffee bag range, business card design, and storefront signage — bringing a consistent logo, color palette, and visual identity together across the brand's physical touchpoints, from shelf packaging to the point of sale.",
    mediaType: "images",
  },
  {
    id: "mizizi-sheba-rollup-banners",
    title: "Mizizi & Sheba Roll-up Banners",
    subtitle: "Exhibition & Marketing Collateral Design",
    category: "Design",
    tags: ["Design", "Brand Collateral", "Exhibitions"],
    coverColor: "from-red-900/20 to-fuchsia-500/10",
    thumbnail: "/images/projects/mizizi-sheba-rollup-banners/sheth-naturals-corporate.png",
    thumbnailAspect: "1280/2792",
    thumbnailFit: "height-centered",
    images: [
      { src: "/images/projects/mizizi-sheba-rollup-banners/sheth-naturals-corporate.png", aspect: "1280/2792" },
      { src: "/images/projects/mizizi-sheba-rollup-banners/mizizi-rose-water.png", aspect: "1227/2662" },
      { src: "/images/projects/mizizi-sheba-rollup-banners/sheba-wash-and-go-gel.png", aspect: "1213/2647" },
      { src: "/images/projects/mizizi-sheba-rollup-banners/sheba-deep-clean-shampoo-bar.png", aspect: "1213/2647" },
      { src: "/images/projects/mizizi-sheba-rollup-banners/sheba-get-curly-curl-creme.png", aspect: "1213/2647" },
      { src: "/images/projects/mizizi-sheba-rollup-banners/sheba-detangler-instant-conditioner.png", aspect: "1227/2662" },
    ],
    description:
      "Roll-up banner designs produced for Mizizi and Sheba's exhibition presence and on-ground marketing operations, giving both brands consistent, professional visual representation at events and activations.",
    mediaType: "images",
  },
  {
    id: "ugc-curl-creme",
    title: "Curl Crème",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Curl Crème"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Curl Crème's hold, definition, and shine are hard to prove through product photography alone — the natural hair community wants to see how a product actually performs on real curl patterns before they trust it.",
    approach:
      "Sourced an organic, unscripted demo from a real Curl Crème user showing the product applied and styled on their own natural hair, letting the product speak for itself rather than a branded ad.",
    execution:
      "Filmed and edited as a short vertical clip for social distribution, capturing the full application and the resulting curl definition in one continuous, authentic take.",
    results:
      "Gave prospective customers a genuine, trustworthy reference for how Curl Crème performs day to day, reinforcing the product's everyday styling credibility within the wider UGC library for the Sheba line.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/curl-creme.mp4", caption: "Curl Crème" }],
  },
  {
    id: "ugc-finger-coils-curl-creme",
    title: "Finger Coils — Curl Crème",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Curl Crème"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Finger coiling is a popular natural hair technique, and customers considering Curl Crème needed to see it hold up specifically through that method rather than take generic marketing claims at face value.",
    approach:
      "Partnered with a creator already practiced in finger coiling to demonstrate the technique using Curl Crème as the sole styling product, keeping the content technique-first rather than product-first.",
    execution:
      "Captured the full finger-coiling process step by step on camera, from product application through coil formation to the finished set.",
    results:
      "Gave the natural hair audience a technique-specific reference for Curl Crème, strengthening its relevance to finger-coil stylists specifically rather than just general curl definition.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/finger-coils-curl-creme.mp4", caption: "Finger Coils — Curl Crème" }],
  },
  {
    id: "ugc-comb-coils-curl-creme",
    title: "Comb Coils — Curl Crème",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Curl Crème"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Comb coils are a distinct styling method from finger coils, and customers who favor that technique needed proof the product could support it without excess product buildup or frizz.",
    approach:
      "Worked with a creator to demonstrate a full comb-coil set using Curl Crème, showcasing the product's performance under a different application method than the finger-coil content.",
    execution:
      "Filmed the comb-coiling process from product application through to the finished style, giving viewers a clear, technique-specific walkthrough.",
    results:
      "Expanded the product's UGC footprint to comb-coil stylists specifically, broadening Curl Crème's demonstrated versatility across multiple natural styling techniques.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/comb-coils-curl-creme.mp4", caption: "Comb Coils — Curl Crème" }],
  },
  {
    id: "ugc-twist-outs-curl-creme",
    title: "Twist Outs — Curl Crème",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Curl Crème"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Twist outs are one of the most requested style references in natural hair content, and Curl Crème needed a genuine demonstration of how it performs for definition and hold through a full twist-and-release cycle.",
    approach:
      "Sourced UGC showing a complete twist-out routine using Curl Crème as the primary styler, from twisting through to the reveal.",
    execution:
      "Captured the twist-out process end to end — product application, twisting, and the final released style — as a single authentic clip.",
    results:
      "Added a twist-out-specific proof point to the Curl Crème UGC library, addressing one of the most common style requests from the natural hair audience.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/twist-outs-curl-creme.mp4", caption: "Twist Outs — Curl Crème" }],
  },
  {
    id: "ugc-transforming-curls-wash-and-go",
    title: "Transforming Curls With Wash & Go",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Wash & Go"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Wash & Go routines live or die on visible transformation, so the brand needed a real demonstration of the product taking curls from wash-day starting point to a defined, finished look.",
    approach:
      "Sourced a creator-led wash-and-go routine using the Wash & Go line, structured around a clear transformation arc rather than a single static result shot.",
    execution:
      "Filmed the full wash-day process from wet application through to the styled, dried result, preserving the before-and-after arc in one clip.",
    results:
      "Delivered a compelling transformation reference for Wash & Go, giving prospective customers a realistic before-and-after benchmark for what the product can do.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/transforming-curls-wash-and-go.mp4", caption: "Transforming Curls With Wash & Go" }],
  },
  {
    id: "ugc-wash-and-go-style",
    title: "Wash & Go Style",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Wash & Go"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Beyond the transformation itself, customers wanted to see the everyday styling routine and finished look a Wash & Go product actually produces on natural hair.",
    approach:
      "Captured a straightforward, everyday styling demo using the Wash & Go product, focused on the finished style rather than a dramatic before-and-after.",
    execution:
      "Filmed a real application and styling session, showing product distribution through the hair and the finished wash-and-go look.",
    results:
      "Added an everyday-use reference to the Wash & Go UGC library, complementing the transformation-focused content with a simpler styling-routine proof point.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/wash-and-go-style.mp4", caption: "Wash & Go Style" }],
  },
  {
    id: "ugc-flexi-rods-wash-and-go-gel",
    title: "Flexi Rods Using Wash & Go Gel",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Wash & Go Gel"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Flexi rod sets are a heat-free styling method popular with the natural hair community, and customers wanted to see Wash & Go Gel hold up through that specific technique.",
    approach:
      "Worked with a creator to demonstrate a full flexi-rod set using Wash & Go Gel, extending the product's technique-specific UGC coverage beyond a standard wash-and-go.",
    execution:
      "Filmed the rod-setting process from gel application through to rod removal and the finished curl pattern.",
    results:
      "Broadened Wash & Go Gel's demonstrated use cases to heat-free styling methods, giving flexi-rod stylists a direct, technique-specific reference.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/flexi-rods-wash-and-go-gel.mp4", caption: "Flexi Rods Using Wash & Go Gel" }],
  },
  {
    id: "ugc-detangling-instant-conditioner",
    title: "Detangling Using Instant Conditioner",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Instant Conditioner"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Detangling is one of the biggest pain points in natural hair care, and customers needed proof that Instant Conditioner could genuinely ease the process rather than just claim to.",
    approach:
      "Sourced UGC showing a real detangling session using Instant Conditioner on knotted, unstretched hair — the toughest realistic use case for the product.",
    execution:
      "Filmed the detangling process from product application through to fully detangled hair, capturing the ease of the process honestly.",
    results:
      "Gave prospective customers an honest, high-stakes proof point for Instant Conditioner's core promise, addressing one of the most common objections in natural hair product buying.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/detangling-instant-conditioner.mp4", caption: "Detangling Using Instant Conditioner" }],
  },
  {
    id: "ugc-baby-hair-detangling",
    title: "Baby's Hair Detangling",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Detangling"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Parents of young children are especially cautious about hair products, needing reassurance that a product is gentle enough for a child's sensitive scalp and finer hair texture before they'll try it.",
    approach:
      "Sourced a real parent-led UGC clip detangling a child's hair with the product, targeting the specific trust barrier around gentleness and suitability for kids.",
    execution:
      "Filmed a real at-home detangling session on a child's hair, showing the product used gently from application through to fully detangled hair.",
    results:
      "Added a much-needed proof point for parents specifically, expanding the product's credibility beyond the core adult natural-hair audience into family use cases.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/baby-hair-detangling.mp4", caption: "Baby's Hair Detangling" }],
  },
  {
    id: "ugc-sister-loc-moisturizer",
    title: "Sister Loc Moisturizer",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Moisturizer"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Sisterlocks require a very specific maintenance routine, and customers with that style needed to see a moisturizing product perform within loc-specific care rather than general natural hair styling.",
    approach:
      "Sourced UGC from a sisterlock wearer demonstrating their moisturizing routine using the product, targeting a loc-care audience with distinct needs from loose natural hair.",
    execution:
      "Filmed a real sisterlock moisturizing routine, showing product application directly into the locs and the resulting shine and moisture.",
    results:
      "Extended the product's UGC coverage into loc-specific hair care, a distinct and often underserved segment of the natural hair market.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/sister-loc-moisturizer.mp4", caption: "Sister Loc Moisturizer" }],
  },
  {
    id: "ugc-masking-bentonite-clay-rosewater",
    title: "Masking — Bentonite Clay + Rosewater",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Masking"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "DIY masking with bentonite clay is popular in natural hair care, and customers wanted to see how the brand's rosewater paired with clay in a real at-home mask rather than just a product ingredient callout.",
    approach:
      "Sourced a real DIY masking demo combining bentonite clay with the brand's rosewater, showing the mixing and application process end to end.",
    execution:
      "Filmed the mask being mixed, applied, and rinsed out, giving viewers a full DIY tutorial rather than a single finished-result shot.",
    results:
      "Positioned the rosewater as part of a broader DIY hair-care ritual, tapping into strong community interest in at-home treatments and recipe-style content.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/masking-bentonite-clay-rosewater.mp4", caption: "Masking — Bentonite Clay + Rosewater" }],
  },
  {
    id: "ugc-body-butters",
    title: "Body Butters",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Body Butters"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Body butters are a highly visual, texture-driven product where customers want to see consistency, melt, and absorption before buying — qualities that are difficult to convey through product photography alone.",
    approach:
      "Sourced a real application demo of the body butter, focused on showing texture and absorption on skin rather than a static jar shot.",
    execution:
      "Filmed the product being scooped, applied, and absorbed into skin in a single continuous, authentic clip.",
    results:
      "Gave prospective customers a genuine sensory reference for the body butter's texture and finish, addressing the core purchase hesitation for this product category.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/body-butters.mp4", caption: "Body Butters" }],
  },
  {
    id: "ugc-hair-growth-combo",
    title: "Hair Growth Combo",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Hair Growth"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Hair growth products carry a high trust bar since results take time, so customers wanted to see how a real user incorporates the growth combo into their regimen rather than rely on before/after claims alone.",
    approach:
      "Sourced UGC showing a real user's application routine for the hair growth combo, focused on demonstrating consistent regimen use rather than an unverifiable results claim.",
    execution:
      "Filmed a real application session walking through how the combo products are used together as part of a hair-care routine.",
    results:
      "Gave the hair growth combo an authentic, routine-focused proof point that builds trust in the product's use case without overpromising on results timelines.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/hair-growth-combo.mp4", caption: "Hair Growth Combo" }],
  },
  {
    id: "ugc-small-sku",
    title: "Small SKU",
    subtitle: "User-Generated Content — Authentic Brand Storytelling",
    category: "Video/UGC",
    tags: ["UGC", "Video", "Small SKU"],
    coverColor: "from-teal-900/20 to-cyan-600/10",
    challenge:
      "Trial and travel-size formats need their own visibility since customers often don't realize a smaller, lower-commitment size exists alongside the full-size product line.",
    approach:
      "Sourced UGC specifically featuring the small SKU format, giving the trial size its own visual proof point distinct from the full-size product content.",
    execution:
      "Filmed a real, everyday-use demo featuring the small-format product, sized and framed to make the trial format clearly visible.",
    results:
      "Raised visibility for the trial-size format specifically, giving cost-conscious or first-time customers a lower-commitment entry point into the product line.",
    mediaType: "videos",
    videoUrls: [{ src: "/videos/ugc/small-sku.mp4", caption: "Small SKU" }],
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
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          )}
        </div>
      </div>
    );
  }

  if (project.mediaType === "videos") {
    if (project.videoUrls && project.videoUrls.length === 1) {
      const v = project.videoUrls[0];
      return (
        <div className="flex flex-col gap-1.5 max-w-xs mx-auto">
          <div className="aspect-[9/16] rounded-xl overflow-hidden bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark">
            <video
              src={v.src}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-contain bg-charcoal"
            >
              Your browser does not support inline video playback.
            </video>
          </div>
          <p className="text-xs text-muted dark:text-gray-500 text-center px-1 leading-snug">{v.caption}</p>
        </div>
      );
    }

    if (project.videoUrls && project.videoUrls.length > 0) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {project.videoUrls.map((v) => (
            <div key={v.src} className="flex flex-col gap-1.5">
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark">
                <video
                  src={v.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain bg-charcoal"
                >
                  Your browser does not support inline video playback.
                </video>
              </div>
              <p className="text-[10px] text-muted dark:text-gray-500 text-center px-1 leading-snug">{v.caption}</p>
            </div>
          ))}
        </div>
      );
    }

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

  // Real multi-image gallery — used when a project has more than one distinct campaign asset
  if (project.images && project.images.length > 1) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {project.images.map((item, i) => (
          <div
            key={imgSrc(item)}
            style={{ aspectRatio: imgAspect(item) }}
            className="relative rounded-xl bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark overflow-hidden"
          >
            <Image
              src={imgSrc(item)}
              alt={`${project.title} asset ${i + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 640px) 50vw, 240px"
            />
          </div>
        ))}
      </div>
    );
  }

  // Single real poster — no gallery, no placeholders
  if (project.thumbnail) {
    return (
      <div className="relative aspect-square max-w-sm mx-auto w-full rounded-xl bg-charcoal/5 dark:bg-off-white/5 border border-border dark:border-border-dark overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={`${project.title} campaign asset`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 384px"
        />
      </div>
    );
  }

  // No real assets yet — placeholder gallery
  return (
    <div className="grid grid-cols-2 gap-3">
      {Array.from({ length: project.imageCount || 2 }).map((_, i) => (
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

            {/* Case study sections — Design showcase pieces use a single Overview instead */}
            {(project.description
              ? [{ label: "Overview", content: project.description }]
              : [
                  { label: "Challenge", content: project.challenge },
                  { label: "Approach", content: project.approach },
                  { label: "Execution", content: project.execution },
                  { label: "Results", content: project.results },
                ]
            ).map((section) => (
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
  // UGC-style projects have no single thumbnail image — preview the first real clip instead.
  const coverVideoSrc =
    !project.thumbnail && project.mediaType === "videos" ? project.videoUrls?.[0]?.src : undefined;
  const hasCover = !!project.thumbnail || !!coverVideoSrc;
  const coverAspect = project.thumbnailAspect ?? (coverVideoSrc ? "9/16" : undefined);
  const coverFit = project.thumbnailFit ?? (coverVideoSrc ? "height-centered" : undefined);
  const isVideoPreview = project.mediaType === "video" || !!coverVideoSrc;

  return (
    <motion.button
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={onClick}
      className="group text-left w-full rounded-2xl overflow-hidden border border-border dark:border-border-dark bg-off-white dark:bg-charcoal hover:border-accent/40 dark:hover:border-accent/50 hover:shadow-xl transition-all duration-300"
    >
      {/* Cover */}
      <div
        className={`relative overflow-hidden flex items-end p-5 ${
          hasCover
            ? `bg-off-white dark:bg-charcoal ${
                coverFit === "height-centered" ? "h-44" : coverAspect ? "" : "aspect-square"
              }`
            : `h-44 bg-gradient-to-br ${project.coverColor}`
        }`}
        style={hasCover && coverAspect && coverFit !== "height-centered" ? { aspectRatio: coverAspect } : undefined}
      >
        {hasCover && coverFit === "height-centered" && (
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 h-full" style={{ aspectRatio: coverAspect }}>
            {coverVideoSrc ? (
              <video
                src={`${coverVideoSrc}#t=0.5`}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-contain"
              />
            ) : (
              <Image
                src={project.thumbnail!}
                alt={`${project.title} thumbnail`}
                fill
                className="object-contain"
                sizes="176px"
              />
            )}
          </div>
        )}
        {hasCover && coverFit !== "height-centered" && project.thumbnail && (
          <Image
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        {hasCover && isVideoPreview && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 rounded-full bg-charcoal/60 flex items-center justify-center">
              <svg width="18" height="18" fill="#FAF7F2" viewBox="0 0 24 24">
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>
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
                className="self-start"
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
