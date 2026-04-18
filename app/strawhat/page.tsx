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
          subtitle="Luffy's crew turns rebellion into liberation, matching Baroque Works with nerve, loyalty, and wildly different kinds of strength."
          intro="This side of the archive tracks the force that broke Crocodile's plans apart. Every Straw Hat profile is framed as part of a shared crew story, not just an individual spotlight."
          label="Straw Hat Register"
          accentColor="#c42b2b"
          facts={[
            { value: "9", label: "Crew profiles" },
            { value: "1", label: "Captain's vow" },
            { value: "∞", label: "Unshaken resolve" },
          ]}
          dark={false}
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
