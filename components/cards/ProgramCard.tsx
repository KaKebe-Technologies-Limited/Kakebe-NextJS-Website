"use client";

import { motion, Variants } from "framer-motion";
import { Program } from "@/lib/types";

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  },
};
interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <motion.div
      className="group relative p-8 rounded-2xl bg-white shadow-lg border border-gray-100 h-full flex flex-col"
      initial="rest"
      whileHover="hover"
      variants={scaleOnHover}
    >
      <div className="text-6xl mb-6">{program.icon}</div>
      <h3 className="text-3xl font-bold mb-4 text-gray-900">{program.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
        {program.description}
      </p>
      <ul className="space-y-3">
        {program.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-blue-600 mr-3 font-bold">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-red-600 to-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.div>
  );
}
