"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { strawHatCrew } from "@/data/strawhat";

export default function StrawHatSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Show just the first 4 crew members as preview
  const preview = strawHatCrew.slice(0, 4);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 section-light overflow-hidden"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(196,43,43,0.06) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: "#8b1a1a" }}
          >
            The Pirates
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black leading-tight mb-6"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              color: "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            The Straw Hat
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #c42b2b, #8b1a1a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Pirates
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed mx-auto"
            style={{
              color: "rgba(26,26,26,0.6)",
              maxWidth: "520px",
            }}
          >
            The crew that shook Alabasta to its core. Led by Monkey D. Luffy,
            the Straw Hat Pirates dismantled Baroque Works and liberated an
            entire kingdom.
          </motion.p>
        </div>

        {/* Crew preview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {preview.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            >
              <Link
                href={`/character/${member.id}`}
                className="block p-6 rounded-sm transition-all duration-300 group"
                style={{
                  background: "white",
                  border: "1px solid rgba(26,26,26,0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                }}
              >
                {/* Color accent */}
                <div
                  className="w-full h-1 rounded-full mb-4"
                  style={{ background: member.color }}
                />

                <p
                  className="font-display font-bold text-sm mb-1 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#1a1a1a" }}
                >
                  {member.name}
                </p>
                <p
                  className="text-xs tracking-wider uppercase"
                  style={{ color: member.color }}
                >
                  {member.codename}
                </p>
                <p
                  className="text-xs mt-2"
                  style={{ color: "rgba(26,26,26,0.45)" }}
                >
                  {member.role}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link
            href="/strawhat"
            className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-widest uppercase font-medium transition-all duration-300"
            style={{
              background: "#1a1a1a",
              color: "#f5f0e8",
              borderRadius: "2px",
            }}
          >
            Meet the Full Crew
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
