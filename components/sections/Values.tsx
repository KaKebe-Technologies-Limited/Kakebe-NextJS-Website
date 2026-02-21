// Values.tsx
"use client";

import { motion, Variants } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import { values } from "@/data/values";
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

export default function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-5xl text-black font-bold text-center mb-4">
            Our Core <span className="text-red-600">Values</span>
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
            The principles that guide every decision, project, and relationship we build.
          </p>
        </SectionReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={FadeInUp}
              className="group relative p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
            >
              {value.icon && <div className="text-5xl mb-4">{value.icon}</div>}
              <h3 className="text-2xl font-bold mb-3 text-black">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>

              {/* Accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-red-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
