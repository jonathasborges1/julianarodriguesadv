import { About as AboutSection } from "@/sections/About/about";
import { AreasDeAtuacao as AreasSection } from "@/sections/AreasDeAtuacao";
import { BlogRecente as BlogRecenteSection } from "@/sections/BlogRecente";
import { Hero as HeroSection } from "@/sections/Hero/hero";
import { OfficeMap as OfficeMapSection } from "@/sections/OfficeMap/officeMap";
import { Contact as ContactSection } from "@/sections/Contact";
import { Footer as FooterSection } from "@/sections/Footer";
import { Faq as FaqSection } from "@/sections/Faq";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-14 md:pt-16">
        <HeroSection />
        <AboutSection />
        <AreasSection />
        <BlogRecenteSection />
        <FaqSection />
        <ContactSection />
        <OfficeMapSection />
        <FooterSection />
      </div>
    </>
  );
}
