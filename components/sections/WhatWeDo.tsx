"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
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

export default function WhatWeDo() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-5xl text-black font-bold text-center mb-4">
            What We <span className="text-red-500">Do</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            We provide the training, space, and support needed to turn ideas
            into market-ready solutions.
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
            <motion.div
              key={program.id}
              variants={FadeInUp}
              className="relative group"
            >
              <div className="text-6xl mb-6">{program.icon}</div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <SectionReveal className="text-center mt-16">
          <Link
            href="/programs"
            className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-semibold transition-colors"
          >
            Explore All Programs
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
