import { notFound } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PageTransition from "@/components/ui/PageTransition";
import CharacterHero from "@/components/detail/CharacterHero";
import AbilitySection from "@/components/detail/AbilitySection";
import CharacterScene from "@/components/detail/CharacterScene";
import { baroqueAgents } from "@/data/baroque";
import { strawHatCrew } from "@/data/strawhat";
import Link from "next/link";
import type { Metadata } from "next";

const allCharacters = [...baroqueAgents, ...strawHatCrew];

export async function generateStaticParams() {
  return allCharacters.map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const character = allCharacters.find((c) => c.id === id);
  if (!character) return { title: "Character Not Found" };
  return {
    title: `${character.name} — Baroque Works`,
    description: character.description,
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = allCharacters.find((c) => c.id === id);

  if (!character) notFound();

  const isBaroque = character.faction === "baroque";
  const backHref = isBaroque ? "/baroque" : "/strawhat";
  const backLabel = isBaroque ? "Baroque Works" : "Straw Hat Crew";

  return (
    <PageTransition>
      <Navbar />
      <main>
        {/* Back button */}
        <div className="fixed bottom-8 left-6 md:left-12 z-40">
          <Link
            href={backHref}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs tracking-widest uppercase font-medium transition-all duration-300 glass-dark gold-border hover:opacity-80"
          >
            ← {backLabel}
          </Link>
        </div>

        <CharacterHero character={character} />
        <AbilitySection character={character} />
        <CharacterScene character={character} />

        {/* Next character navigation */}
        <NextCharacterNav
          current={character.id}
          characters={allCharacters.filter(
            (c) => c.faction === character.faction,
          )}
        />
      </main>
      <Footer />
    </PageTransition>
  );
}

function NextCharacterNav({
  current,
  characters,
}: {
  current: string;
  characters: typeof allCharacters;
}) {
  const idx = characters.findIndex((c) => c.id === current);
  const next = characters[(idx + 1) % characters.length];
  const prev = characters[(idx - 1 + characters.length) % characters.length];

  return (
    <section className="py-16 px-6 md:px-12 bg-baroque-deep border-t border-baroque-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Previous */}
        <Link
          href={`/character/${prev.id}`}
          className="group flex flex-col gap-1"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-baroque-muted">
            Previous
          </span>
          <span className="font-display font-bold text-baroque-cream group-hover:text-baroque-gold transition-colors duration-300">
            {prev.name}
          </span>
        </Link>

        {/* Divider dot */}
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: characters[0]?.color ?? "#c9a84c" }}
        />

        {/* Next */}
        <Link
          href={`/character/${next.id}`}
          className="group flex flex-col gap-1 text-right"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-baroque-muted">
            Next
          </span>
          <span className="font-display font-bold text-baroque-cream group-hover:text-baroque-gold transition-colors duration-300">
            {next.name}
          </span>
        </Link>
      </div>
    </section>
  );
}
