"use client";

import { motion } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { fadeInUp } from "@/lib/animations";

export default function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <SectionReveal>
            <div className="h-full flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                Mission
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Equip Uganda's Next Generation of Technologists
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We exist to provide world-class technical training, mentorship,
                and resources to young Ugandan innovators who are ready to build
                solutions that transform industries and communities.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="h-full flex flex-col justify-center">
              <div className="inline-block px-4 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold mb-4">
                Vision
              </div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                A Continent of Builders, Not Just Consumers
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We envision an Uganda where innovation hubs in every major city
                are launching global tech companies, where our engineers lead
                open-source projects, and where Ugandan solutions set the
                standard.
              </p>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
