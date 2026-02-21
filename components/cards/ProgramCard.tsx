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
  featured?: boolean;
}

export default function ProgramCard({ program, featured = false }: ProgramCardProps) {
  return (
    <motion.div
      className={`group relative p-8 rounded-2xl bg-white shadow-lg h-full flex flex-col ${
        featured
          ? "border-2 border-red-600 shadow-[0_10px_40px_rgba(220,38,38,0.15)]"
          : "border border-gray-100"
      }`}
      initial="rest"
      whileHover="hover"
      variants={scaleOnHover}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-red-600 to-black text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg">
            ✨ Featured
          </span>
        </div>
      )}
      <div className="text-6xl mb-6">{program.icon}</div>
      <h3 className="text-3xl font-bold mb-4 text-gray-900">{program.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed flex-1">
        {program.description}
      </p>
      <ul className="space-y-3">
        {program.features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <span className="text-red-600 mr-3 font-bold">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className={`absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r ${featured ? 'from-red-600 to-black' : 'from-red-600 to-black'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
    </motion.div>
  );
}
