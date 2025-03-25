import { About as AboutSection } from "@/sections/About/about";
import { Hero as HeroSection } from "@/sections/Hero/hero";
import { OfficeMap as OfficeMapSection } from "@/sections/OfficeMap/officeMap";
import { Contact as ContactSection } from "@/sections/Contact";
import { Footer as FooterSection } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OfficeMapSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
