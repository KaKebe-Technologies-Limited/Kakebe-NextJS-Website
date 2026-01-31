import MissionVision from "@/components/sections/MissionVision";
import StorySection from "@/components/sections/StoryVision";
import Values from "@/components/sections/Values";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CTA from "@/components/sections/CTA";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">About Kakebe</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're not just another tech hub. We're a movement building Uganda's
            innovation future.
          </p>
        </div>
      </section>

      <MissionVision />
      <StorySection />
      <Values />
      <ImpactMetrics />
      <CTA />
    </main>
  );
}
