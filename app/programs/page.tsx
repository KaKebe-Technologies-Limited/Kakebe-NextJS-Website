"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import ProgramCard from "@/components/cards/ProgramCard";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { programs } from "@/data/programs";
import { staggerContainer } from "@/lib/animations";

export const FadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ProgramsPage() {
  return (
    // Increased padding-top to give fixed header more room
    <main className="pt-24">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 via-red-700 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Our Programs
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto font-medium">
            From training to incubation to tech services—we provide the
            infrastructure for innovation in Uganda.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-5xl text-black font-black text-center mb-4">
              How We Support <span className="text-red-600">Innovators</span>
            </h2>
            {/* Contrast Fix: text-gray-800 instead of gray-600 */}
            <p className="text-xl text-gray-800 text-center max-w-3xl mx-auto mb-16 font-medium">
              Every program is designed with one goal: turning potential into
              real-world impact.
            </p>
          </SectionReveal>

          <motion.div
            className="grid md:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {programs.map((program) => (
              <motion.div key={program.id} variants={FadeInUp}>
                <ProgramCard program={program} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-4xl text-black font-black text-center mb-16">
              How to <span className="text-red-600">Join</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-4 gap-8 text-black">
            {[
              {
                step: "01",
                title: "Apply",
                description:
                  "Fill out our application form with your background and goals.",
              },
              {
                step: "02",
                title: "Interview",
                description:
                  "We'll schedule a conversation to learn more about you.",
              },
              {
                step: "03",
                title: "Onboard",
                description: "Get access to our space, mentors, and resources.",
              },
              {
                step: "04",
                title: "Build",
                description: "Start creating solutions that matter.",
              },
            ].map((item) => (
              <SectionReveal key={item.step}>
                <div className="text-center group">
                  {/* Color Sync: text-red-600 replaces blue */}
                  <div className="text-7xl font-black text-red-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 -mt-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h2 className="text-4xl text-black font-black mb-8">
                Why Choose <span className="text-red-600">Kakebe</span>?
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "World-Class Curriculum",
                    description:
                      "Learn from industry professionals with real-world experience.",
                  },
                  {
                    title: "Hands-On Projects",
                    description:
                      "Build actual products from day one, not just classroom exercises.",
                  },
                  {
                    title: "Mentorship Network",
                    description:
                      "Get paired with experienced mentors who've been where you want to go.",
                  },
                  {
                    title: "Community Access",
                    description:
                      "Join a network of builders, investors, and industry leaders.",
                  },
                  {
                    title: "Career Support",
                    description:
                      "We help you land your dream job or launch your startup.",
                  },
                ].map((benefit) => (
                  <div key={benefit.title} className="flex items-start">
                    {/* Color Sync: bg-red-600 replaces blue */}
                    <div className="flex-shrink-0 w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 shadow-[0_0_10px_rgba(220,38,38,0.4)]" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-700 font-medium">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="bg-gradient-to-br from-red-600 to-black rounded-3xl p-12 text-white shadow-2xl">
                <h3 className="text-3xl font-black mb-6">
                  Ready to Start Your Journey?
                </h3>
                {/* Color Sync: text-red-50 replaces blue-100 */}
                <p className="text-lg text-red-50 mb-8 font-medium">
                  Applications are open for our next cohort. Don't miss your
                  chance to join Uganda's most dynamic innovation community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center font-bold">
                    <svg
                      className="w-6 h-6 mr-3 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>12-week intensive programs</span>
                  </div>
                  <div className="flex items-center font-bold">
                    <svg
                      className="w-6 h-6 mr-3 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>No prior experience required</span>
                  </div>
                </div>
                <div className="mt-10">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-white hover:bg-red-50 transition-colors py-4"
                    >
                      <span className="text-black font-black uppercase tracking-wider">
                        Apply Now
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
}
