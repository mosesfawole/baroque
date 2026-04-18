"use client";

import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { RotateCcw, Sparkles, ZoomIn } from "lucide-react";
import type { Character } from "@/types";

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
  const reduceMotion = useReducedMotion();
  const [viewerEnabled, setViewerEnabled] = useState(false);
  const shouldRenderViewer = viewerEnabled && inView && !reduceMotion;

  return (
    <section
      ref={ref}
      className="px-6 py-24 md:px-12 md:py-32"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <p
            className="mb-3 text-xs font-medium uppercase tracking-[0.4em]"
            style={{ color: character.color }}
          >
            3D Interactive
          </p>
          <h2
            className="mb-4 font-display font-bold"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              color: "#f5f0e8",
              letterSpacing: "-0.01em",
            }}
          >
            Inspect the Model
          </h2>
          <p className="text-sm" style={{ color: "rgba(245,240,232,0.4)" }}>
            {reduceMotion
              ? "Interactive 3D is paused because reduced motion is enabled."
              : "Load the interactive viewer when you are ready to explore it."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative overflow-hidden rounded-sm"
          style={{
            height: "500px",
            background: "#0d0d0d",
            border: `1px solid ${character.color}20`,
            boxShadow: `0 0 60px ${character.color}10`,
          }}
        >
          {shouldRenderViewer ? (
            <CharacterModel characterId={character.id} color={character.color} />
          ) : (
            <div
              className="flex h-full flex-col items-center justify-center gap-5 px-6 text-center"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.02), transparent 60%)",
              }}
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full"
                style={{
                  background: `${character.color}18`,
                  color: character.color,
                  border: `1px solid ${character.color}30`,
                }}
              >
                <Sparkles size={22} />
              </div>
              <div className="max-w-md space-y-2">
                <p className="font-display text-xl font-bold text-baroque-cream">
                  {reduceMotion ? "3D viewer paused" : "Interactive viewer ready"}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(245,240,232,0.5)" }}
                >
                  {reduceMotion
                    ? "Reduced-motion preferences are being respected to keep the page calmer and lighter."
                    : "The 3D scene loads on demand so the rest of the page stays fast and responsive."}
                </p>
              </div>
              {!reduceMotion ? (
                <button
                  type="button"
                  onClick={() => setViewerEnabled(true)}
                  className="rounded-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.3em] transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    background: character.color,
                    color: "#0a0a0a",
                    boxShadow: `0 0 24px ${character.color}40`,
                  }}
                >
                  Load 3D Viewer
                </button>
              ) : null}
            </div>
          )}

          <div
            className="absolute left-4 top-4 h-px w-8"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute left-4 top-4 h-8 w-px"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute bottom-4 right-4 h-px w-8"
            style={{ background: character.color, opacity: 0.4 }}
          />
          <div
            className="absolute bottom-4 right-4 h-8 w-px"
            style={{ background: character.color, opacity: 0.4 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 flex items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2">
            <RotateCcw size={13} style={{ color: "rgba(245,240,232,0.25)" }} />
            <span
              className="text-xs tracking-wider"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              {shouldRenderViewer ? "Drag to rotate" : "Viewer loads on demand"}
            </span>
          </div>
          <div
            className="h-3 w-px"
            style={{ background: "rgba(245,240,232,0.1)" }}
          />
          <div className="flex items-center gap-2">
            <ZoomIn size={13} style={{ color: "rgba(245,240,232,0.25)" }} />
            <span
              className="text-xs tracking-wider"
              style={{ color: "rgba(245,240,232,0.25)" }}
            >
              {shouldRenderViewer ? "Scroll to zoom" : "Reduced initial page weight"}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
