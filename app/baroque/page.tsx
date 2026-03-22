import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import CharacterGrid from "@/components/characters/CharacterGrid";
import PageTransition from "@/components/ui/PageTransition";
import { baroqueAgents } from "@/data/baroque";

export const metadata = {
  title: "Baroque Works Agents — Baroque Works",
  description: "Meet the numbered agents of the secret criminal organization.",
};

export default function BaroquePage() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <CharacterGrid
          characters={baroqueAgents}
          title="The Agents"
          subtitle="Each agent is assigned a number and a partner of the opposite gender. Together they form the most dangerous criminal network in the Grand Line."
          label="Baroque Works"
          accentColor="#c9a84c"
          dark={true}
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
