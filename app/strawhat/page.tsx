import CharacterGrid from "@/components/characters/CharacterGrid";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import { strawHatCrew } from "@/data/strawhat";

export const metadata = {
  title: "Straw Hat Pirates",
  description: "The crew that dismantled Baroque Works and liberated Alabasta.",
};

export default function StrawHatPage() {
  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">
        <CharacterGrid
          characters={strawHatCrew}
          title="The Crew"
          subtitle="The pirates who shook the world. Led by Monkey D. Luffy, each member carries a dream that cannot be crushed - and the strength to back it up."
          label="Straw Hat Pirates"
          accentColor="#c42b2b"
          dark={false}
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
