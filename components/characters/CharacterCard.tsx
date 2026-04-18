"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Character } from "@/types";

interface Props {
  character: Character;
  index: number;
}

function getCardSummary(character: Character) {
  if (character.personality.length <= 92) {
    return character.personality;
  }

  return `${character.personality.slice(0, 89)}...`;
}

export default function CharacterCard({ character, index }: Props) {
  const isBaroque = character.faction === "baroque";
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={
        reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.05 }
      }
    >
      <Link
        href={`/character/${character.id}`}
        aria-label={`View ${character.name}`}
        className="group block h-full"
      >
        <article
          className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] transition-transform duration-500 group-hover:-translate-y-1"
          style={{
            background: isBaroque
              ? "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.02))"
              : "linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.88))",
            border: `1px solid ${
              isBaroque ? "rgba(255,255,255,0.08)" : "rgba(26,26,26,0.08)"
            }`,
            boxShadow: isBaroque
              ? "0 20px 42px rgba(0,0,0,0.28)"
              : "0 18px 34px rgba(26,26,26,0.08)",
          }}
        >
          <div
            className="absolute inset-x-0 top-0 h-1"
            style={{ background: character.color }}
          />

          <div className="flex flex-1 flex-col p-6">
            <div className="mb-5 flex items-start justify-between gap-4">
              <span
                className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]"
                style={{
                  background: `${character.color}16`,
                  color: character.color,
                  border: `1px solid ${character.color}28`,
                }}
              >
                {character.codename}
              </span>

              <span
                className="text-[10px] uppercase tracking-[0.22em]"
                style={{
                  color: isBaroque
                    ? "rgba(245,240,232,0.36)"
                    : "rgba(26,26,26,0.38)",
                }}
              >
                {character.ability.type === "None"
                  ? "Combat style"
                  : character.ability.type}
              </span>
            </div>

            <div className="mb-6 flex flex-1 items-center justify-center">
              <div className="relative flex h-28 w-28 items-center justify-center">
                <div
                  className="absolute inset-0 rounded-full opacity-70"
                  style={{
                    background: `radial-gradient(circle, ${character.color}22 0%, transparent 70%)`,
                  }}
                />
                <div
                  className="absolute inset-2 rounded-full border"
                  style={{ borderColor: `${character.color}26` }}
                />
                <div
                  className="absolute inset-[28px] rounded-full"
                  style={{
                    background: `${character.color}18`,
                    border: `1px solid ${character.color}30`,
                  }}
                />
                <div
                  className="absolute h-3.5 w-3.5 rounded-full shadow-[0_0_20px_currentColor]"
                  style={{ background: character.color, color: character.color }}
                />
              </div>
            </div>

            <div className="mb-5">
              <h3
                className="mb-2 font-display text-xl font-bold"
                style={{ color: isBaroque ? "#f5f0e8" : "#1a1a1a" }}
              >
                {character.name}
              </h3>
              <p
                className="mb-3 text-sm"
                style={{
                  color: isBaroque
                    ? "rgba(245,240,232,0.52)"
                    : "rgba(26,26,26,0.5)",
                }}
              >
                {character.role}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{
                  color: isBaroque
                    ? "rgba(245,240,232,0.6)"
                    : "rgba(26,26,26,0.58)",
                }}
              >
                {getCardSummary(character)}
              </p>
            </div>

            <div
              className="mt-auto flex items-center justify-between border-t pt-4"
              style={{
                borderColor: isBaroque
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(26,26,26,0.08)",
              }}
            >
              <div>
                <p
                  className="mb-1 text-[10px] uppercase tracking-[0.24em]"
                  style={{
                    color: isBaroque
                      ? "rgba(245,240,232,0.32)"
                      : "rgba(26,26,26,0.36)",
                  }}
                >
                  Signature
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: character.color }}
                >
                  {character.ability.name}
                </p>
              </div>

              <span
                className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em]"
                style={{ color: isBaroque ? "#f5f0e8" : "#1a1a1a" }}
              >
                Open
                <ArrowRight size={14} style={{ color: character.color }} />
              </span>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
