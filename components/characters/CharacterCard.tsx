"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Character } from "@/types";

interface Props {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: Props) {
  const isFaction = character.faction === "baroque";
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
        className="block group"
      >
        <div
          className="relative overflow-hidden transition-all duration-500"
          style={{
            background: isFaction ? "#111111" : "#ffffff",
            border: `1px solid ${
              isFaction ? "rgba(201,168,76,0.12)" : "rgba(26,26,26,0.08)"
            }`,
            borderRadius: "4px",
            boxShadow: isFaction
              ? "0 4px 24px rgba(0,0,0,0.4)"
              : "0 4px 16px rgba(0,0,0,0.06)",
          }}
        >
          <div
            className="h-0.5 w-full transition-all duration-500 group-hover:h-1"
            style={{ background: character.color }}
          />

          <div className="p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <span
                className="rounded-sm px-2 py-1 text-[10px] font-medium uppercase tracking-[0.3em]"
                style={{
                  background: `${character.color}18`,
                  color: character.color,
                  border: `1px solid ${character.color}30`,
                }}
              >
                {character.codename}
              </span>

              {character.ability.type !== "None" ? (
                <span
                  className="text-[10px] font-medium uppercase tracking-wider"
                  style={{
                    color: isFaction
                      ? "rgba(245,240,232,0.25)"
                      : "rgba(26,26,26,0.3)",
                  }}
                >
                  {character.ability.type}
                </span>
              ) : null}
            </div>

            <div
              className="mb-6 flex w-full items-center justify-center transition-transform duration-500 group-hover:scale-105"
              style={{ height: "120px" }}
            >
              <div
                className="relative"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    border: `1px solid ${character.color}30`,
                  }}
                />
                <div
                  className="absolute inset-3 rounded-full"
                  style={{
                    background: `${character.color}15`,
                    border: `1px solid ${character.color}40`,
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="h-3 w-3 rounded-full"
                    style={{ background: character.color }}
                  />
                </div>
              </div>
            </div>

            <h3
              className="mb-1 font-display text-base font-bold transition-colors duration-300"
              style={{
                color: isFaction ? "#f5f0e8" : "#1a1a1a",
                letterSpacing: "-0.01em",
              }}
            >
              {character.name}
            </h3>

            <p
              className="mb-4 text-xs"
              style={{
                color: isFaction
                  ? "rgba(245,240,232,0.4)"
                  : "rgba(26,26,26,0.45)",
              }}
            >
              {character.role}
            </p>

            <div
              className="pt-4"
              style={{
                borderTop: `1px solid ${
                  isFaction ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.08)"
                }`,
              }}
            >
              <p
                className="mb-1 text-[11px] uppercase tracking-wider"
                style={{
                  color: isFaction
                    ? "rgba(245,240,232,0.25)"
                    : "rgba(26,26,26,0.3)",
                }}
              >
                Ability
              </p>
              <p
                className="text-xs font-medium"
                style={{
                  color: character.color,
                }}
              >
                {character.ability.name}
              </p>
            </div>
          </div>

          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `${character.color}10`,
              backdropFilter: "blur(2px)",
            }}
          >
            <span
              className="rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-[0.3em]"
              style={{
                background: character.color,
                color: "#0a0a0a",
              }}
            >
              View Profile
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
