"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Character } from "@/types";

interface Props {
  character: Character;
  index: number;
}

export default function CharacterCard({ character, index }: Props) {
  const isFaction = character.faction === "baroque";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/character/${character.id}`} className="block group">
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
          {/* Top color bar */}
          <div
            className="h-0.5 w-full transition-all duration-500 group-hover:h-1"
            style={{ background: character.color }}
          />

          {/* Card body */}
          <div className="p-6">
            {/* Codename badge */}
            <div className="flex items-center justify-between mb-4">
              <span
                className="text-[10px] tracking-[0.3em] uppercase font-medium px-2 py-1 rounded-sm"
                style={{
                  background: `${character.color}18`,
                  color: character.color,
                  border: `1px solid ${character.color}30`,
                }}
              >
                {character.codename}
              </span>

              {/* Devil fruit type badge */}
              {character.ability.type !== "None" && (
                <span
                  className="text-[10px] tracking-wider uppercase font-medium"
                  style={{
                    color: isFaction
                      ? "rgba(245,240,232,0.25)"
                      : "rgba(26,26,26,0.3)",
                  }}
                >
                  {character.ability.type}
                </span>
              )}
            </div>

            {/* Abstract shape — unique per character */}
            <div
              className="w-full mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
              style={{ height: "120px" }}
            >
              <div
                className="relative"
                style={{
                  width: "80px",
                  height: "80px",
                }}
              >
                {/* Outer ring */}
                <div
                  className="absolute inset-0 rounded-full animate-spin-slow"
                  style={{
                    border: `1px solid ${character.color}30`,
                  }}
                />
                {/* Inner circle */}
                <div
                  className="absolute inset-3 rounded-full"
                  style={{
                    background: `${character.color}15`,
                    border: `1px solid ${character.color}40`,
                  }}
                />
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ background: character.color }}
                  />
                </div>
              </div>
            </div>

            {/* Name */}
            <h3
              className="font-display font-bold text-base mb-1 transition-colors duration-300"
              style={{
                color: isFaction ? "#f5f0e8" : "#1a1a1a",
                letterSpacing: "-0.01em",
              }}
            >
              {character.name}
            </h3>

            {/* Role */}
            <p
              className="text-xs mb-4"
              style={{
                color: isFaction
                  ? "rgba(245,240,232,0.4)"
                  : "rgba(26,26,26,0.45)",
              }}
            >
              {character.role}
            </p>

            {/* Ability name */}
            <div
              className="pt-4"
              style={{
                borderTop: `1px solid ${
                  isFaction ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.08)"
                }`,
              }}
            >
              <p
                className="text-[11px] tracking-wider uppercase mb-1"
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

          {/* Hover overlay — View Profile */}
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `${character.color}10`,
              backdropFilter: "blur(2px)",
            }}
          >
            <span
              className="text-xs tracking-[0.3em] uppercase font-medium px-4 py-2 rounded-sm"
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
