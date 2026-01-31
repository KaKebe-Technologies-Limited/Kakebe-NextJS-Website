import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import WhatWeDo from "@/components/sections/WhatWeDo";
import InnovatorsSpotlight from "@/components/sections/InnovatorSpotlight";
import TeamPreview from "@/components/sections/TeamPreview";
import Values from "@/components/sections/Values";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <WhatWeDo />
      <ImpactMetrics />
      <InnovatorsSpotlight />
      <TeamPreview />
      <Values />
      <CTA />
    </main>
  );
}
