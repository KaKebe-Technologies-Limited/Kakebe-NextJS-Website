"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import ProgramCard from "@/components/cards/ProgramCard";
import SectionReveal from "@/components/ui/SectionReveal";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { programs } from "@/data/programs";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export const FadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProgramsPage() {
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            From training to incubation to tech services—we provide the
            infrastructure for innovation.
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-5xl text-black font-bold text-center mb-4">
              How We Support <span className="text-red-600">Innovators</span>
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
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
            <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-red-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-4xl text-black font-bold text-center mb-16">
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
                <div className="text-center">
                  <div className="text-6xl font-black text-blue-600 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
              <h2 className="text-4xl text-black font-bold mb-6">
                Why Choose <span className="text-red-600">Kakebe</span>?
              </h2>
              <div className="space-y-6">
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
                    <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="bg-gradient-to-br from-red-600 to-black rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">
                  Ready to Start Your Journey?
                </h3>
                <p className="text-lg text-blue-100 mb-8">
                  Applications are open for our next cohort. Don't miss your
                  chance to join Uganda's most dynamic innovation community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>12-week intensive programs</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>No prior experience required</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-white text-blackrun hover:bg-gray-100 text-black"
                    >
                      <span className="text-black">Apply Now</span>
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
