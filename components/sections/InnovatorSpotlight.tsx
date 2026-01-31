"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import InnovatorCard from "@/components/cards/InnovatorCard";
import { innovators } from "@/data/innovators";
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

export default function InnovatorsSpotlight() {
  const featured = innovators.filter((i) => i.featured);

  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-5xl font-bold mb-4">Meet Our Innovators</h2>
          <p className="text-xl text-gray-400 max-w-3xl mb-16">
            These are the builders, creators, and problem-solvers shaping
            Uganda's tech future.
          </p>
        </SectionReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {featured.map((innovator) => (
            <motion.div key={innovator.id} variants={FadeInUp}>
              <InnovatorCard innovator={innovator} />
            </motion.div>
          ))}
        </motion.div>

        <SectionReveal className="text-center">
          <Link
            href="/innovators"
            className="inline-block px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 rounded-lg font-semibold transition-colors"
          >
            View All Innovators
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
