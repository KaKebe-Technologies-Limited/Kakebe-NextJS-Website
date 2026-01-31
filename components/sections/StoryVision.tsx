"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { fadeInUp } from "@/lib/animations";
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function StorySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="text-5xl text-black font-bold mb-6">
              How <span className="text-red-600">Kakebe</span> Began
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                In 2018, a small group of engineers and educators gathered in a
                cramped co-working space in Lira with a simple question: Why are
                Uganda's brightest tech minds leaving the continent?
              </p>
              <p>
                The answer was clear. Lack of access to quality training,
                mentorship, and a community that believed in building locally.
              </p>
              <p>
                So we started Kakebe—not as a business, but as a movement. A
                place where young technologists could learn by building, where
                mentorship was hands-on, and where failure was part of the
                process.
              </p>
              <p className="font-semibold text-gray-900">
                Today, we've trained hundreds of innovators, launched dozens of
                startups, and proven that world-class technology can—and
                should—be built right here.
              </p>
            </div>
          </SectionReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/sedrickotolo.JPG"
                alt="Early days at Kakebe"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm text-gray-600 italic">
                "We didn't set out to build a tech hub. We set out to build a
                community."
              </p>
              <p className="text-sm font-bold text-gray-900 mt-2">
                Sedrick Otolo, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
