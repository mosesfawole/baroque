"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";
import type { Character } from "@/types";
import { RotateCcw, ZoomIn } from "lucide-react";

const CharacterModel = dynamic(
  () => import("@/components/three/CharacterModel"),
  { ssr: false },
);

interface Props {
  character: Character;
}

export default function CharacterScene({ character }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3 font-medium"
            style={{ color: character.color }}
          >
            3D Interactive
          </p>
          <h2
            className="font-display font-bold mb-4"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#f5f0e8",
              letterSpacing: "-0.01em",
            }}
          >
            Inspect the Model
          </h2>
          <p className="text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>
            Drag to rotate · Scroll to zoom
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-sm overflow-hidden"
          style={{
            height: "500px",
            background: "#0d0d0d",
            border: `1px solid ${character.color}20`,
            boxShadow: `0 0 60px ${character.color}10`,
          }}
        >
          <CharacterModel characterId={character.id} color={character.color} />

          {/* Corner decorations */}
          <div
            className="absolute top-4 left-4 w-8 h-px"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute top-4 left-4 w-px h-8"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute bottom-4 right-4 w-8 h-px"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute bottom-4 right-4 w-px h-8"
            style={{ background: character.color, opacity: 0.4 }}
          />
        </motion.div>

        {/* Controls hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-8 mt-6"
        >
          <div className="flex items-center gap-2">
            <RotateCcw size={13} style={{ color: "rgba(245,240,232,0.25)" }} />
            <span
              className="text-xs tracking-wider"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Drag to rotate
            </span>
          </div>
          <div
            className="w-px h-3"
            style={{ background: "rgba(245,240,232,0.1)" }}
          />
          <div className="flex items-center gap-2">
            <ZoomIn size={13} style={{ color: "rgba(245,240,232,0.25)" }} />
            <span
              className="text-xs tracking-wider"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              Scroll to zoom
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
