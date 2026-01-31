"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";

export default function CTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-red-600 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,_rgba(255,255,255,0.3)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(255,255,255,0.3)_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <SectionReveal>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Build the Future?
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto">
            Whether you're an aspiring innovator, a mentor, or an organization
            looking for tech solutions—we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-5 bg-white text-red-600 hover:bg-gray-100 rounded-lg font-bold text-lg transition-colors shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              href="/programs"
              className="px-10 py-5 bg-transparent border-2 border-white hover:bg-white hover:text-red-600 rounded-lg font-bold text-lg transition-all"
            >
              Join a Program
            </Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
