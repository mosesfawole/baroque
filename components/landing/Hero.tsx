"use client";

import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

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

const heroFacts = [
  { value: "18", label: "profiles" },
  { value: "2", label: "factions" },
  { value: "1", label: "Alabasta conflict" },
];

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
    [1, reduceMotion ? 1 : 0.92],
  );

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-28 md:px-12"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 22% 20%, rgba(201,168,76,0.12), transparent 22%), radial-gradient(circle at 80% 18%, rgba(139,26,26,0.18), transparent 24%)",
        }}
      />

      <div
        className="absolute left-0 top-0 h-px w-32"
        style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }}
      />
      <div
        className="absolute left-0 top-0 h-32 w-px"
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
        className="absolute inset-y-0 right-0 w-full pointer-events-none md:w-1/2 md:pointer-events-auto"
        style={{ opacity, y }}
      >
        {!reduceMotion ? <FloatingOrb /> : null}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.75fr)] lg:items-end"
        style={{ y, scale }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="eyebrow mb-6"
            style={{ color: "#c9a84c" }}
          >
            One Piece dossier
          </motion.p>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6 font-display font-black leading-none"
            style={{
              fontSize: "clamp(56px, 10vw, 124px)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
            }}
          >
            BAROQUE
            <br />
            <span className="gold-text" style={{ fontSize: "0.84em" }}>
              WORKS
            </span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mb-10 max-w-[560px] text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(245,240,232,0.62)" }}
          >
            A stylized character archive for the Alabasta saga, pairing the
            secret structure of Baroque Works with the pirate crew that tore it
            apart. Browse each profile like a field file, not a wiki entry.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            <Link
              href="/baroque"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.26em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #d4b155, #8b5e14)",
                color: "#0a0a0a",
                boxShadow: "0 18px 36px rgba(201,168,76,0.2)",
              }}
            >
              Open Baroque dossiers
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/strawhat"
              className="inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.26em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(255,255,255,0.03)",
                color: "#f5f0e8",
                border: "1px solid rgba(255,255,255,0.14)",
                backdropFilter: "blur(14px)",
              }}
            >
              Meet the Straw Hats
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="text-sm uppercase tracking-[0.24em]"
            style={{ color: "rgba(245,240,232,0.34)" }}
          >
            Built around contrast, hierarchy, and character presence.
          </motion.p>
        </div>

        <motion.aside
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="panel-dark rounded-[1.75rem] p-6"
        >
          <p
            className="eyebrow mb-6"
            style={{ color: "rgba(245,240,232,0.36)" }}
          >
            Archive overview
          </p>

          <div className="space-y-4">
            {heroFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-end justify-between gap-4 border-b pb-4"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <p
                  className="font-display text-4xl font-black"
                  style={{ color: "#f5f0e8" }}
                >
                  {fact.value}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.24em]"
                  style={{ color: "rgba(245,240,232,0.38)" }}
                >
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}
