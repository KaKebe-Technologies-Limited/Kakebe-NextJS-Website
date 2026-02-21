"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { team } from "@/data/team";
import { staggerContainer } from "@/lib/animations";

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

export default function TeamPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredTeam =
    filter === "all"
      ? team
      : team.filter((m) =>
          m.category.some((cat) => cat.toLowerCase() === filter.toLowerCase()),
        );
  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Our Team</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Meet the people building the future of Ugandan innovation.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-4">
            {[
              { id: "all", label: "All Team" },
              { id: "Management", label: "Management" },
              { id: "Developers", label: "Developers" },
              { id: "Digital Content", label: "Digital Content" },
              { id: "Marketing Team", label: "Marketing Team" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  filter === tab.id
                    ? "bg-red-600 text-white shadow-md" // Changed to red to match Kakebe branding
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* We add a key to motion.div so the grid re-animates when the filter changes */}
          <motion.div
            key={filter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filteredTeam.map((member) => (
              <motion.div key={member.id} variants={FadeInUp}>
                <TeamMemberCard member={member} />
              </motion.div>
            ))}
          </motion.div>

          {filteredTeam.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No team members found in the "{filter}" category.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 text-red-600 font-bold hover:underline"
              >
                View all team members
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
