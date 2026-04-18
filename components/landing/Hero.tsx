"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";

const FloatingOrb = dynamic(() => import("@/components/three/FloatingOrb"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="h-full w-full"
      style={{
        background:
          "radial-gradient(circle at center, rgba(201,168,76,0.16) 0%, rgba(139,26,26,0.1) 24%, transparent 62%)",
      }}
    />
  ),
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 150]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [1, reduceMotion ? 1 : 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, reduceMotion ? 1 : 0.9],
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(139,26,26,0.15) 0%, rgba(10,10,10,0) 70%)",
        }}
      />

      <div
        className="absolute top-0 left-0 h-px w-32"
        style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute top-0 left-0 h-32 w-px"
        style={{ background: "linear-gradient(180deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-px w-32"
        style={{ background: "linear-gradient(270deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute bottom-0 right-0 h-32 w-px"
        style={{ background: "linear-gradient(0deg, #c9a84c, transparent)" }}
      />

      <motion.div
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-full pointer-events-none md:w-1/2 md:pointer-events-auto"
        style={{ opacity, y }}
      >
        {!reduceMotion ? <FloatingOrb /> : null}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-12"
        style={{ y, scale }}
      >
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-xs font-medium uppercase tracking-[0.4em]"
            style={{ color: "#c9a84c" }}
          >
            One Piece Universe
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 font-display font-black leading-none"
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

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-[480px] text-base font-light leading-relaxed md:text-lg"
            style={{
              color: "rgba(245,240,232,0.55)",
            }}
          >
            The secret criminal organization operating under the cover of a
            bounty hunting agency. Explore the agents and the crew who stopped
            them.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/baroque"
              className="group flex items-center gap-2 px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #8b5e14)",
                color: "#0a0a0a",
                borderRadius: "2px",
              }}
            >
              Explore Agents
              <motion.span
                aria-hidden="true"
                animate={reduceMotion ? undefined : { x: [0, 4, 0] }}
                transition={
                  reduceMotion ? undefined : { duration: 1.5, repeat: Infinity }
                }
              >
                →
              </motion.span>
            </Link>

            <Link
              href="/strawhat"
              className="flex items-center gap-2 px-8 py-3.5 text-sm font-medium uppercase tracking-widest transition-all duration-300"
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

      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity }}
      >
        <p
          className="text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "rgba(245,240,232,0.3)" }}
        >
          Scroll
        </p>
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={
            reduceMotion ? undefined : { duration: 1.5, repeat: Infinity }
          }
        >
          <ArrowDown size={14} style={{ color: "#c9a84c" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
