import { About as AboutSection } from "@/sections/About/about";
import { Hero as HeroSection } from "@/sections/Hero/hero";
import { OfficeMap as OfficeMapSection } from "@/sections/OfficeMap/officeMap";
import { Contact as ContactSection } from "@/sections/Contact";
import { Footer as FooterSection } from "@/sections/Footer";

import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      {/* Links internos via âncoras - ajudam na navegação e no SEO */}
      <Navbar />
      <div className="pt-14 md:pt-16">
        <HeroSection />
        <AboutSection />
        <OfficeMapSection />
        <ContactSection />
        <FooterSection />
      </div>
    </>
  );
}
