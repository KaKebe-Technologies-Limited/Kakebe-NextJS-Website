"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Innovator } from "@/lib/types";

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { type: "spring", stiffness: 300 },
  },
};

interface InnovatorCardProps {
  innovator: Innovator;
}

export default function InnovatorCard({ innovator }: InnovatorCardProps) {
  return (
    <Link href={`/innovators/${innovator.slug}`}>
      <motion.div
        className="group relative overflow-hidden rounded-xl bg-white shadow-md"
        initial="rest"
        whileHover="hover"
        variants={scaleOnHover}
      >
        {/* Changed from aspect-[3/4] to aspect-square */}
        <div className="aspect-square relative overflow-hidden">
          <Image
            src={innovator.image}
            alt={innovator.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          {" "}
          {/* Reduced padding */}
          <h3 className="text-lg font-bold mb-0.5">{innovator.name}</h3>{" "}
          {/* text-2xl -> text-lg */}
          <p className="text-[11px] text-gray-300 uppercase tracking-widest">
            {innovator.tagline}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
