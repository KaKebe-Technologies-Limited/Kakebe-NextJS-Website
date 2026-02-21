"use client";

import { motion, Variants } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/data/site";
import Link from "next/link";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-600 via-black to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(220,38,38,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(139,92,246,0.3)_0%,_transparent_50%)]" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={FadeInUp}
          className="text-3xl md:text-5xl font-black tracking-tight mb-6"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          variants={FadeInUp}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div variants={FadeInUp} className="flex gap-4 justify-center">
          <Link
            href="/innovators"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Meet Our Innovators
          </Link>
          <Link
            href="/programs"
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-all"
          >
            Explore Programs
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
