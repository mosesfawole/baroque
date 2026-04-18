"use client";

import { motion } from "framer-motion";
import type { Character } from "@/types";

interface Props {
  character: Character;
}

function getLeadSentence(character: Character) {
  const firstSentence = character.description.split(". ")[0];
  return firstSentence.endsWith(".") ? firstSentence : `${firstSentence}.`;
}

export default function CharacterHero({ character }: Props) {
  const specialtyLabel =
    character.ability.type === "None"
      ? "Signature style"
      : `${character.ability.type} fruit`;

  const highlights = [
    {
      label: "Faction",
      value: character.faction === "baroque" ? "Baroque Works" : "Straw Hat Pirates",
    },
    {
      label: "Role",
      value: character.role,
    },
    {
      label: character.bounty ? "Bounty" : "Specialty",
      value: character.bounty ?? specialtyLabel,
    },
  ];

  return (
    <section
      className="relative overflow-hidden px-6 pb-18 pt-32 md:px-12 md:pb-24"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 72% 30%, ${character.color}22 0%, transparent 42%)`,
        }}
      />

      <div
        className="absolute left-6 top-16 h-px w-16 md:left-12"
        style={{
          background: `linear-gradient(90deg, ${character.color}, transparent)`,
        }}
      />
      <div
        className="absolute left-6 top-16 h-16 w-px md:left-12"
        style={{
          background: `linear-gradient(180deg, ${character.color}, transparent)`,
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-end">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center gap-4"
          >
            <span
              className="rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.32em]"
              style={{
                background: `${character.color}18`,
                color: character.color,
                border: `1px solid ${character.color}30`,
              }}
            >
              {character.codename}
            </span>
            <span
              className="eyebrow"
              style={{ color: "rgba(245,240,232,0.32)" }}
            >
              Field dossier
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-5 font-display font-black leading-none"
            style={{
              fontSize: "clamp(54px, 8vw, 104px)",
              color: "#f5f0e8",
              letterSpacing: "-0.03em",
            }}
          >
            {character.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
            style={{ color: "rgba(245,240,232,0.58)" }}
          >
            {getLeadSentence(character)}
          </motion.p>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="panel-dark rounded-[1.85rem] p-6 md:p-7"
        >
          <p
            className="eyebrow mb-5"
            style={{ color: "rgba(245,240,232,0.34)" }}
          >
            Quick read
          </p>

          <div className="space-y-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] px-4 py-4"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  className="mb-2 text-[10px] uppercase tracking-[0.26em]"
                  style={{ color: "rgba(245,240,232,0.34)" }}
                >
                  {item.label}
                </p>
                <p className="text-sm leading-relaxed text-baroque-cream">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-5 rounded-[1.25rem] px-4 py-4"
            style={{
              background: `${character.color}12`,
              border: `1px solid ${character.color}28`,
            }}
          >
            <p
              className="mb-2 text-[10px] uppercase tracking-[0.26em]"
              style={{ color: "rgba(245,240,232,0.34)" }}
            >
              Signature
            </p>
            <p className="text-sm font-medium" style={{ color: character.color }}>
              {character.ability.name}
            </p>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
