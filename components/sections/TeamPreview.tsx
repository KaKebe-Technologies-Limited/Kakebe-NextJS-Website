"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import SectionReveal from "@/components/ui/SectionReveal";
import TeamMemberCard from "@/components/cards/TeamMemberCard";
import { team } from "@/data/team";
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

export default function TeamPreview() {
  const leadership = team
    .filter((member) => member.category.includes("Management"))
    .slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-5xl text-black font-bold mb-4">
            Led by Visionaries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-16">
            Our team combines deep technical expertise with a passion for
            building communities and launching careers.
          </p>
        </SectionReveal>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {leadership.map((member) => (
            <motion.div key={member.id} variants={FadeInUp}>
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </motion.div>

        <SectionReveal className="text-center">
          <Link
            href="/team"
            className="inline-block px-8 py-4 bg-gray-900 text-white hover:bg-gray-800 rounded-lg font-semibold transition-colors"
          >
            Meet the Full Team
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
