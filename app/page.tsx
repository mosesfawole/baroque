import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/landing/Hero";
import BaroqueSection from "@/components/landing/BaroqueSection";
import StrawHatSection from "@/components/landing/StrawHatSection";
import PageTransition from "@/components/ui/PageTransition";

export default function HomePage() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />
        <BaroqueSection />
        <div className="gold-divider" />
        <StrawHatSection />
      </main>
      <Footer />
    </PageTransition>
  );
}
