"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { strawHatCrew } from "@/data/strawhat";

export default function StrawHatSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const preview = strawHatCrew.slice(0, 4);

  return (
    <section
      ref={ref}
      className="section-light relative overflow-hidden px-6 py-32 md:px-12 md:py-44"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(196,43,43,0.08) 0%, transparent 54%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {preview.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
            >
              <Link
                href={`/character/${member.id}`}
                className="panel-light block rounded-[1.5rem] p-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <div
                  className="mb-4 h-1 rounded-full"
                  style={{ background: member.color }}
                />
                <p className="mb-1 font-display text-lg font-bold text-baroque-black">
                  {member.name}
                </p>
                <p
                  className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: member.color }}
                >
                  {member.codename}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(26,26,26,0.58)" }}
                >
                  {member.role}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="lg:pl-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="eyebrow mb-4"
            style={{ color: "#8b1a1a" }}
          >
            The pirates
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 font-display font-black leading-tight"
            style={{
              fontSize: "clamp(38px, 6vw, 76px)",
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
            }}
          >
            The crew that
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c42b2b, #8b1a1a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              broke the pattern
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-[560px] text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(26,26,26,0.62)" }}
          >
            The Straw Hats stand in direct opposition to Baroque Works&apos;
            structure. They are chaotic where Crocodile is controlled, deeply
            loyal where his agents are ranked, and impossible to reduce to a
            simple chain of command.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/strawhat"
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition-transform duration-300 hover:-translate-y-0.5"
              style={{
                background: "#1a1a1a",
                color: "#f5f0e8",
                boxShadow: "0 18px 32px rgba(26,26,26,0.14)",
              }}
            >
              Meet the full crew
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
