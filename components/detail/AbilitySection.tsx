"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const typeLabel =
    character.ability.type === "None"
      ? "Signature combat style"
      : `${character.ability.type} Devil Fruit`;

  return (
    <section
      ref={ref}
      className="bg-baroque-deep px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.9fr)] lg:items-start">
        <div>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="eyebrow mb-4"
            style={{ color: character.color }}
          >
            Combat dossier
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 font-display font-bold leading-tight"
            style={{
              fontSize: "clamp(30px, 4vw, 52px)",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            {character.ability.name}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
            style={{
              background: `${typeColor}15`,
              border: `1px solid ${typeColor}30`,
            }}
          >
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: typeColor }}
            />
            <span
              className="text-xs font-medium uppercase tracking-[0.26em]"
              style={{ color: typeColor }}
            >
              {typeLabel}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(245,240,232,0.62)" }}
          >
            {character.ability.description}
          </motion.p>
        </div>

        <div className="space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="panel-dark rounded-[1.6rem] p-6"
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "rgba(245,240,232,0.34)" }}
            >
              Background
            </p>
            <p
              className="text-sm leading-relaxed md:text-[15px]"
              style={{ color: "rgba(245,240,232,0.66)" }}
            >
              {character.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-[1.6rem] p-6"
            style={{
              background: `${character.color}10`,
              border: `1px solid ${character.color}24`,
            }}
          >
            <p
              className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em]"
              style={{ color: "rgba(245,240,232,0.34)" }}
            >
              Temperament
            </p>
            <p
              className="text-sm italic leading-relaxed md:text-[15px]"
              style={{ color: character.color }}
            >
              &quot;{character.personality}&quot;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
