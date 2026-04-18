import Link from "next/link";
import type { Metadata } from "next";
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
            className="flex items-center gap-2 rounded-sm px-4 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-300 glass-dark gold-border hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-baroque-gold focus-visible:ring-offset-2 focus-visible:ring-offset-baroque-black"
          >
            <span aria-hidden="true">←</span>
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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link href={`/character/${previous.id}`} className="group flex flex-col gap-1">
          <span className="text-[10px] uppercase tracking-[0.3em] text-baroque-muted">
            Previous
          </span>
          <span className="font-display font-bold text-baroque-cream transition-colors duration-300 group-hover:text-baroque-gold">
            {previous.name}
          </span>
        </Link>

        <div
          aria-hidden="true"
          className="hidden h-1.5 w-1.5 rounded-full sm:block"
          style={{ background: characters[0]?.color ?? "#c9a84c" }}
        />

        <Link
          href={`/character/${next.id}`}
          className="group flex flex-col gap-1 text-left sm:text-right"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-baroque-muted">
            Next
          </span>
          <span className="font-display font-bold text-baroque-cream transition-colors duration-300 group-hover:text-baroque-gold">
            {next.name}
          </span>
        </Link>
      </div>
    </section>
  );
}
