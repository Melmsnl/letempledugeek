import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import OfferingsSection from "@/components/OfferingsSection";
import ImageCarousel from "@/components/ImageCarousel";
import InfoSection from "@/components/InfoSection";
import CherryBlossomSeparator from "@/components/CherryBlossomSeparator";
import infoData from "@/app/data/info.json";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      <CherryBlossomSeparator />
      <div id="about">
        <AboutSection />
      </div>

      <CherryBlossomSeparator />
      <div id="offerings">
        <OfferingsSection />
      </div>

      <CherryBlossomSeparator />
      <div id="gallery">
        <ImageCarousel />
      </div>

      <CherryBlossomSeparator />
      <div id="infos">
        <InfoSection />
      </div>

      <footer className="bg-primary-foreground text-white py-8 px-4 text-center mt-20">
        <p className="text-white/80">
          © {new Date().getFullYear()} {infoData.name}. Tous droits réservés.
        </p>
      </footer>
    </main>
  );
}
