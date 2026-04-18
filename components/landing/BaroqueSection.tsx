"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const facts = [
  { title: "Numbered hierarchy", text: "Each pairing turns identity into rank and obedience into strategy." },
  { title: "Public disguise", text: "The organization hides behind bounty hunting while operating as a shadow state." },
  { title: "Single objective", text: "Every role ultimately points back to Crocodile's takeover plan for Alabasta." },
];

export default function BaroqueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-44"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(139,26,26,0.1) 0%, transparent 58%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
            style={{ color: "#c9a84c" }}
          >
            The organization
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-display font-black leading-tight"
            style={{
              fontSize: "clamp(38px, 6vw, 76px)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
            }}
          >
            A criminal machine
            <br />
            <span className="gold-text">built for control</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-[560px] text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(245,240,232,0.58)" }}
          >
            Baroque Works weaponized secrecy, rank, and loyalty. The result was
            less a crew than a system: one that could infiltrate a kingdom,
            erase witnesses, and keep its true leader almost invisible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/baroque"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "rgba(201,168,76,0.1)",
                color: "#c9a84c",
                border: "1px solid rgba(201,168,76,0.24)",
              }}
            >
              Meet the agents
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid gap-4"
        >
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="panel-dark rounded-[1.6rem] p-6"
            >
              <p className="mb-3 font-display text-2xl font-bold text-baroque-cream">
                {fact.title}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,240,232,0.55)" }}
              >
                {fact.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
