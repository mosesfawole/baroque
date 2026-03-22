"use client";
import { motion } from "framer-motion";
import CharacterCard from "./CharacterCard";
import type { Character } from "@/types";

interface Props {
  characters: Character[];
  title: string;
  subtitle: string;
  label: string;
  accentColor?: string;
  dark?: boolean;
}

export default function CharacterGrid({
  characters,
  title,
  subtitle,
  label,
  accentColor = "#c9a84c",
  dark = true,
}: Props) {
  return (
    <section
      className="min-h-screen pt-32 pb-24 px-6 md:px-12"
      style={{ background: dark ? "#0a0a0a" : "#f5f0e8" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.4em] uppercase mb-4 font-medium"
            style={{ color: accentColor }}
          >
            {label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black mb-4 leading-tight"
            style={{
              fontSize: "clamp(40px, 7vw, 80px)",
              color: dark ? "#f5f0e8" : "#1a1a1a",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base leading-relaxed"
            style={{
              color: dark ? "rgba(245,240,232,0.5)" : "rgba(26,26,26,0.55)",
              maxWidth: "500px",
            }}
          >
            {subtitle}
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 h-px origin-left"
            style={{
              background: `linear-gradient(90deg, ${accentColor}, transparent)`,
              width: "200px",
            }}
          />
        </div>

        {/* Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs tracking-widest uppercase mb-8"
          style={{
            color: dark ? "rgba(245,240,232,0.25)" : "rgba(26,26,26,0.3)",
          }}
        >
          {characters.length} Characters
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters.map((character, i) => (
            <CharacterCard key={character.id} character={character} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
