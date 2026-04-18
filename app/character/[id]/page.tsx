import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import AbilitySection from "@/components/detail/AbilitySection";
import CharacterHero from "@/components/detail/CharacterHero";
import CharacterScene from "@/components/detail/CharacterScene";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import { baroqueAgents } from "@/data/baroque";
import { strawHatCrew } from "@/data/strawhat";

const allCharacters = [...baroqueAgents, ...strawHatCrew];

export async function generateStaticParams() {
  return allCharacters.map((character) => ({ id: character.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const character = allCharacters.find((entry) => entry.id === id);

  if (!character) {
    return { title: "Character Not Found" };
  }

  return {
    title: `${character.name} - Character Profile`,
    description: character.description,
  };
}

export default async function CharacterDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = allCharacters.find((entry) => entry.id === id);

  if (!character) {
    notFound();
  }

  const isBaroque = character.faction === "baroque";
  const backHref = isBaroque ? "/baroque" : "/strawhat";
  const backLabel = isBaroque ? "Baroque Works" : "Straw Hat Crew";

  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">
        <div className="fixed bottom-8 left-6 z-40 md:left-12">
          <Link
            href={backHref}
            aria-label={`Back to ${backLabel}`}
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] transition-all duration-300 glass-dark gold-border hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-baroque-gold focus-visible:ring-offset-2 focus-visible:ring-offset-baroque-black"
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>
        </div>

        <CharacterHero character={character} />
        <AbilitySection character={character} />
        <CharacterScene character={character} />

        <NextCharacterNav
          current={character.id}
          characters={allCharacters.filter(
            (entry) => entry.faction === character.faction,
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
  const index = characters.findIndex((entry) => entry.id === current);
  const next = characters[(index + 1) % characters.length];
  const previous = characters[(index - 1 + characters.length) % characters.length];

  return (
    <section
      aria-label="Character navigation"
      className="border-t border-baroque-border bg-baroque-deep px-6 py-16 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
        <Link
          href={`/character/${previous.id}`}
          className="panel-dark group rounded-[1.5rem] p-5 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-baroque-muted">
            <ArrowLeft size={14} />
            Previous dossier
          </span>
          <p className="font-display text-xl font-bold text-baroque-cream transition-colors duration-300 group-hover:text-baroque-gold">
            {previous.name}
          </p>
        </Link>

        <div
          aria-hidden="true"
          className="hidden h-2.5 w-2.5 rounded-full md:block"
          style={{ background: characters[0]?.color ?? "#c9a84c" }}
        />

        <Link
          href={`/character/${next.id}`}
          className="panel-dark group rounded-[1.5rem] p-5 text-left transition-transform duration-300 hover:-translate-y-0.5 md:text-right"
        >
          <span className="mb-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-baroque-muted md:justify-end">
            Next dossier
            <ArrowRight size={14} />
          </span>
          <p className="font-display text-xl font-bold text-baroque-cream transition-colors duration-300 group-hover:text-baroque-gold">
            {next.name}
          </p>
        </Link>
      </div>
    </section>
  );
}
