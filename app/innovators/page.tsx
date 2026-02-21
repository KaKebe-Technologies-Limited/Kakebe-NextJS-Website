"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import InnovatorCard from "@/components/cards/InnovatorCard";
import SectionReveal from "@/components/ui/SectionReveal";
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

export default function InnovatorsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredInnovators =
    filter === "all" ? innovators : innovators.filter((i) => i.featured);

  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Our Innovators
          </h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Meet the leaders and visionaries driving innovative projects that shape Uganda's tech future.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === "all"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All Project Leaders
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                filter === "featured"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Featured
            </button>
          </div>
        </div>
      </section>

      {/* Innovators Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredInnovators.map((innovator) => (
              <motion.div key={innovator.id} variants={FadeInUp}>
                <InnovatorCard innovator={innovator} />
              </motion.div>
            ))}
          </motion.div>

          {filteredInnovators.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No innovators found.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
