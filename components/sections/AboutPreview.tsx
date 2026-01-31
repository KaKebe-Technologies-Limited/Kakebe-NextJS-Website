"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

export default function AboutPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/kakebe.jpg"
                alt="Kakebe Innovation Hub"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <SectionReveal>
            <h2 className="text-5xl text-black font-bold mb-6">
              More Than a Tech Hub
            </h2>
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Kakebe is where ambition meets execution. We're not just teaching
              code—we're building a movement of Ugandan technologists who create
              solutions that matter.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From our workshop floors to global tech stages, our innovators are
              proving that world-class technology can come from anywhere.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              Our Story
            </Link>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
