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
          subtitle="Each agent is assigned a number and a partner of the opposite gender. Together they form the most dangerous criminal network in the Grand Line."
          label="Baroque Works"
          accentColor="#c9a84c"
          dark
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
