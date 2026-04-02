import Hero from "@/components/sections/Hero";
import DBIPSection from "@/components/sections/DBIPSection";
import AboutPreview from "@/components/sections/AboutPreview";
import WhatWeDo from "@/components/sections/WhatWeDo";
import InnovatorsSpotlight from "@/components/sections/InnovatorSpotlight";
import TeamPreview from "@/components/sections/TeamPreview";
import Values from "@/components/sections/Values";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CTA from "@/components/sections/CTA";
import ProgramCard from "@/components/cards/ProgramCard";
import Link from "next/link";
import {
  getHeroSection,
  getMetrics,
  getValues,
  getTeamMembers,
  getInnovators,
  getPrograms,
} from "@/lib/data-access";

export default async function Home() {
  const [hero, metrics, values, team, innovators, programs] = await Promise.all([
    getHeroSection(),
    getMetrics(),
    getValues(),
    getTeamMembers(),
    getInnovators(),
    getPrograms(),
  ]);

  const featuredPrograms = programs.slice(0, 4);

  return (
    <main>
      <Hero
        headline={hero.headline}
        subheadline={hero.subheadline}
        cta1Label={hero.cta1Label}
        cta1Href={hero.cta1Href}
        cta2Label={hero.cta2Label}
        cta2Href={hero.cta2Href}
      />
      <DBIPSection />
      <AboutPreview />
      <WhatWeDo />
      <ImpactMetrics metrics={metrics} />

      {/* Featured Programs Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-black font-black text-center mb-4">
              What We <span className="text-red-600">Do</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto font-medium">
              We provide the training, space, and support needed to turn ideas into market-ready solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {featuredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/programs"
              className="inline-block bg-gradient-to-r from-red-600 to-black text-white font-bold py-4 px-8 rounded-xl hover:from-red-700 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore All Programs
            </Link>
          </div>
        </div>
      </section>

      <InnovatorsSpotlight innovators={innovators} />
      <TeamPreview team={team} />
      <Values values={values} />
      <CTA />
    </main>
  );
}
