"use client";

import MissionVision from "@/components/sections/MissionVision";
import StorySection from "@/components/sections/StoryVision";
import Values from "@/components/sections/Values";
import ImpactMetrics from "@/components/sections/ImpactMetrics";
import CTA from "@/components/sections/CTA";
import SectionReveal from "@/components/ui/SectionReveal";
import { motion } from "framer-motion";

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

      {/* Kakebe x TUY Partnership Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-red-600 rounded-full text-sm font-semibold mb-4">
                Partnership
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Kakebe Technologies x <span className="text-red-500">The Unlimited Youth (TUY)</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                For the past two years, Kakebe Technologies has partnered with The Unlimited Youth,
                combining technology innovation with youth mentorship to create impactful community
                programs across Northern Uganda.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                This collaboration harnesses Kakebe's digital expertise and TUY's extensive youth networks
                to deliver high-impact initiatives in:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  "Leadership",
                  "ICT Skilling",
                  "Entrepreneurship",
                  "Digital Literacy",
                  "Community Transformation"
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Together We Build</h3>
                <p className="text-red-100 text-lg mb-6">
                  "Combining technology innovation with youth mentorship to create impactful community programs across Northern Uganda."
                </p>
                <div className="flex items-center justify-between border-t border-red-500/30 pt-6">
                  <div>
                    <p className="text-3xl font-black text-white">2+ Years</p>
                    <p className="text-red-200 text-sm">Partnership</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white">1000+</p>
                    <p className="text-red-200 text-sm">Youth Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Our <span className="text-red-600">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                From humble beginnings to becoming Northern Uganda's leading tech innovation hub.
              </p>
            </div>
          </SectionReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-200 hidden md:block" />

            {/* Milestones */}
            <div className="space-y-16 md:space-y-24">
              {[
                {
                  year: "2020",
                  title: "Company Established",
                  description: "Kakebe Technologies was founded with a vision to transform Northern Uganda through technology.",
                  highlight: "Most Active & Innovative Tech Company"
                },
                {
                  year: "2021",
                  title: "Scaling Begins",
                  description: "Expanded operations and started growing our team of talented developers.",
                  highlight: "170+ Virtual Jobs Offered"
                },
                {
                  year: "2022",
                  title: "Growth & Recognition",
                  description: "Strengthened partnerships and increased impact across the region.",
                  highlight: "1500+ Youth Reached Monthly"
                },
                {
                  year: "2024",
                  title: "Industry Leader",
                  description: "Recognized nationally as a leader in tech innovation and youth empowerment.",
                  highlight: "70+ Active Developers"
                }
              ].map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center md:justify-${
                    index % 2 === 0 ? "start" : "end"
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                        index % 2 === 0 ? "text-left" : "text-left md:text-right"
                      }`}
                    >
                      <div className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-bold rounded-full mb-3">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{milestone.description}</p>
                      <p className="text-red-600 font-semibold text-sm">
                        ✓ {milestone.highlight}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-600 rounded-full border-4 border-white shadow-lg hidden md:block z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "180+", label: "Internships" },
              { value: "18", label: "Full-time Jobs" },
              { value: "1500+", label: "Youth Reached" },
              { value: "70+", label: "Developers" }
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-xl shadow-md">
                <p className="text-3xl md:text-4xl font-black text-red-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <StorySection />
      <Values />
      <ImpactMetrics />
      <CTA />
    </main>
  );
}
