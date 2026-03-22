"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BaroqueSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 50%, rgba(139,26,26,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: "#c9a84c" }}
            >
              The Organization
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-black mb-6 leading-tight"
              style={{
                fontSize: "clamp(36px, 6vw, 72px)",
                color: "#f5f0e8",
                letterSpacing: "-0.02em",
              }}
            >
              The Secret
              <br />
              <span className="gold-text">Criminal Empire</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(245,240,232,0.55)", maxWidth: "420px" }}
            >
              Operating under the guise of a bounty hunting agency, Baroque
              Works was a massive criminal organization led by the Warlord of
              the Sea, Crocodile. With agents ranked by number and partnered by
              gender, the organization's true goal was to seize control of the
              kingdom of Alabasta.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/baroque"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase font-medium transition-colors group"
                style={{ color: "#c9a84c" }}
              >
                Meet the Agents
                <span className="transition-transform group-hover:translate-x-2 duration-300">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "9", label: "Numbered Agents" },
              { number: "Mr. 0", label: "President" },
              { number: "Alabasta", label: "Target Kingdom" },
              { number: "4", label: "Devil Fruit Users" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-sm gold-border"
                style={{
                  background: "rgba(201,168,76,0.03)",
                }}
              >
                <p
                  className="font-display font-black mb-1"
                  style={{
                    fontSize: "clamp(24px, 4vw, 36px)",
                    color: "#c9a84c",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(245,240,232,0.4)" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
