"use client";

import { motion } from "framer-motion";
import CharacterCard from "./CharacterCard";
import type { Character } from "@/types";

interface Props {
  characters: Character[];
  title: string;
  subtitle: string;
  intro: string;
  label: string;
  accentColor?: string;
  facts: Array<{
    value: string;
    label: string;
  }>;
  dark?: boolean;
}

export default function CharacterGrid({
  characters,
  title,
  subtitle,
  intro,
  label,
  accentColor = "#c9a84c",
  facts,
  dark = true,
}: Props) {
  const bodyColor = dark ? "#f5f0e8" : "#1a1a1a";
  const mutedColor = dark ? "rgba(245,240,232,0.62)" : "rgba(26,26,26,0.58)";
  const panelClass = dark ? "panel-dark" : "panel-light";

  return (
    <section
      className="min-h-screen px-6 pb-24 pt-32 md:px-12"
      style={{ background: dark ? "#0a0a0a" : "#f5f0e8" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(320px,0.95fr)] lg:items-end">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-4"
              style={{ color: accentColor }}
            >
              {label}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 font-display font-black leading-tight"
              style={{
                fontSize: "clamp(42px, 7vw, 88px)",
                color: bodyColor,
                letterSpacing: "-0.03em",
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-base leading-relaxed md:text-lg"
              style={{ color: mutedColor }}
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 h-px origin-left"
              style={{
                background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                width: "240px",
              }}
            />
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className={`${panelClass} rounded-[1.75rem] p-6 md:p-7`}
          >
            <p
              className="eyebrow mb-4"
              style={{ color: dark ? "rgba(245,240,232,0.36)" : "rgba(26,26,26,0.42)" }}
            >
              Archive Notes
            </p>
            <p
              className="mb-6 text-sm leading-relaxed md:text-[15px]"
              style={{ color: mutedColor }}
            >
              {intro}
            </p>

            <div className="grid grid-cols-3 gap-3">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl px-4 py-4"
                  style={{
                    background: dark
                      ? "rgba(255,255,255,0.035)"
                      : "rgba(255,255,255,0.56)",
                    border: dark
                      ? "1px solid rgba(255,255,255,0.06)"
                      : "1px solid rgba(26,26,26,0.08)",
                  }}
                >
                  <p
                    className="mb-1 font-display text-2xl font-black"
                    style={{ color: accentColor }}
                  >
                    {fact.value}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.24em]"
                    style={{
                      color: dark
                        ? "rgba(245,240,232,0.36)"
                        : "rgba(26,26,26,0.42)",
                    }}
                  >
                    {fact.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8 mt-12 flex items-center justify-between gap-4 border-b pb-5"
          style={{
            borderColor: dark
              ? "rgba(255,255,255,0.08)"
              : "rgba(26,26,26,0.08)",
          }}
        >
          <p
            className="eyebrow"
            style={{
              color: dark ? "rgba(245,240,232,0.32)" : "rgba(26,26,26,0.4)",
            }}
          >
            Browse {characters.length} dossiers
          </p>
          <div
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: accentColor }}
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character, index) => (
            <CharacterCard key={character.id} character={character} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
