"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Character } from "@/types";

interface Props {
  character: Character;
}

const fruitTypeColors: Record<string, string> = {
  Paramecia: "#4a7a9b",
  Zoan: "#5a8a4a",
  Logia: "#8b6914",
  None: "#6b6b6b",
};

export default function AbilitySection({ character }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const typeColor = fruitTypeColors[character.ability.type] ?? "#6b6b6b";

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: "#111111" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left — ability details */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
              style={{ color: character.color }}
            >
              Powers & Abilities
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold mb-6 leading-tight"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                color: "#f5f0e8",
                letterSpacing: "-0.01em",
              }}
            >
              {character.ability.name}
            </motion.h2>

            {/* Type badge */}
            {character.ability.type !== "None" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-sm"
                style={{
                  background: `${typeColor}15`,
                  border: `1px solid ${typeColor}30`,
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: typeColor }}
                />
                <span
                  className="text-xs tracking-widest uppercase font-medium"
                  style={{ color: typeColor }}
                >
                  {character.ability.type} Type Devil Fruit
                </span>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base leading-relaxed"
              style={{ color: "rgba(245,240,232,0.6)" }}
            >
              {character.ability.description}
            </motion.p>
          </div>

          {/* Right — personality + description */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 rounded-sm"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${character.color}20`,
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3 font-medium"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                Background
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,240,232,0.65)" }}
              >
                {character.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-sm"
              style={{
                background: `${character.color}08`,
                border: `1px solid ${character.color}20`,
              }}
            >
              <p
                className="text-xs tracking-[0.3em] uppercase mb-3 font-medium"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                Personality
              </p>
              <p
                className="text-sm leading-relaxed italic"
                style={{ color: character.color }}
              >
                &quot;{character.personality}&quot;
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
