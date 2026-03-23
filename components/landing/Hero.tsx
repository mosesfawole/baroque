"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import the 3D component — prevents SSR issues with WebGL
const FloatingOrb = dynamic(() => import("@/components/three/FloatingOrb"), {
  ssr: false,
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms on scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,26,26,0.15) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      {/* Gold corner accents */}
      <div
        className="absolute top-0 left-0 w-32 h-px"
        style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute top-0 left-0 w-px h-32"
        style={{ background: "linear-gradient(180deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-32 h-px"
        style={{ background: "linear-gradient(270deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-px h-32"
        style={{ background: "linear-gradient(0deg, #c9a84c, transparent)" }}
      />

      {/* 3D Orb — right side */}
      <motion.div
        className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 pointer-events-none md:pointer-events-auto"
        style={{ opacity, y }}
      >
        <FloatingOrb />
      </motion.div>

      {/* Text content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full"
        style={{ y, scale }}
      >
        <div className="max-w-2xl">
          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs tracking-[0.4em] uppercase mb-6 font-medium"
            style={{ color: "#c9a84c" }}
          >
            One Piece Universe
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display font-black leading-none mb-6"
            style={{
              fontSize: "clamp(56px, 10vw, 120px)",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            BAROQUE
            <br />
            <span className="gold-text" style={{ fontSize: "0.85em" }}>
              WORKS
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base md:text-lg mb-10 leading-relaxed font-light"
            style={{
              color: "rgba(245,240,232,0.55)",
              maxWidth: "480px",
            }}
          >
            The secret criminal organization operating under the cover of a
            bounty hunting agency. Explore the agents — and those who stopped
            them.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/baroque"
              className="group flex items-center gap-2 px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #8b5e14)",
                color: "#0a0a0a",
                borderRadius: "2px",
              }}
            >
              Explore Agents
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>

            <Link
              href="/strawhat"
              className="flex items-center gap-2 px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
              style={{
                background: "transparent",
                color: "rgba(245,240,232,0.7)",
                border: "1px solid rgba(245,240,232,0.2)",
                borderRadius: "2px",
              }}
            >
              Straw Hat Crew
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
      >
        <p
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          Scroll
        </p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={14} style={{ color: "#c9a84c" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
