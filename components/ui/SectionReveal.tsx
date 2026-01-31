"use client";

import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
}

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

export default function SectionReveal({
  children,
  className = "",
}: SectionRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={FadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}
