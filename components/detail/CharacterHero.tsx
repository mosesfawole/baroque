"use client";
import { motion } from "framer-motion";
import type { Character } from "@/types";

interface Props {
  character: Character;
}

export default function CharacterHero({ character }: Props) {
  return (
    <section
      className="relative min-h-[60vh] flex items-end pb-16 pt-32 px-6 md:px-12 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, ${character.color}18 0%, transparent 65%)`,
        }}
      />

      {/* Corner accents */}
      <div
        className="absolute top-16 left-6 md:left-12 w-16 h-px"
        style={{
          background: `linear-gradient(90deg, ${character.color}, transparent)`,
        }}
      />
      <div
        className="absolute top-16 left-6 md:left-12 w-px h-16"
        style={{
          background: `linear-gradient(180deg, ${character.color}, transparent)`,
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          {/* Faction + codename */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span
              className="text-[10px] tracking-[0.4em] uppercase font-medium px-3 py-1.5 rounded-sm"
              style={{
                background: `${character.color}18`,
                color: character.color,
                border: `1px solid ${character.color}30`,
              }}
            >
              {character.codename}
            </span>
            <span
              className="text-[10px] tracking-[0.3em] uppercase"
              style={{ color: "rgba(245,240,232,0.3)" }}
            >
              {character.faction === "baroque"
                ? "Baroque Works"
                : "Straw Hat Pirates"}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black leading-none mb-4"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#f5f0e8",
              letterSpacing: "-0.02em",
            }}
          >
            {character.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg mb-6 font-light"
            style={{ color: "rgba(245,240,232,0.5)" }}
          >
            {character.role}
          </motion.p>

          {/* Bounty */}
          {character.bounty && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-3"
            >
              <span
                className="text-xs tracking-[0.3em] uppercase"
                style={{ color: "rgba(245,240,232,0.3)" }}
              >
                Bounty
              </span>
              <span
                className="font-display font-bold text-lg"
                style={{ color: character.color }}
              >
                {character.bounty}
              </span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
