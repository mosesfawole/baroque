import CharacterGrid from "@/components/characters/CharacterGrid";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PageTransition from "@/components/ui/PageTransition";
import { baroqueAgents } from "@/data/baroque";

export const metadata = {
  title: "Baroque Works Agents",
  description: "Meet the numbered agents of the secret criminal organization.",
};

export default function BaroquePage() {
  return (
    <PageTransition>
      <Navbar />
      <main id="main-content">
        <CharacterGrid
          characters={baroqueAgents}
          title="The Agents"
          subtitle="Each operative carries a codename, a mission, and a place inside Crocodile's larger design for Alabasta."
          intro="From assassins and infiltrators to living weapons, Baroque Works was built like a hidden empire. Browse the organization as a dossier rather than a simple cast list."
          label="Baroque Works Archive"
          accentColor="#c9a84c"
          facts={[
            { value: "9", label: "Core operatives" },
            { value: "2", label: "Royal targets" },
            { value: "1", label: "Hidden mastermind" },
          ]}
          dark
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
