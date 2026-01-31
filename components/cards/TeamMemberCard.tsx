"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/lib/types";

export const scaleOnHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02, // Slightly more subtle zoom
    transition: { type: "spring", stiffness: 300 },
  },
};

interface TeamMemberCardProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100" // Added light border
      initial="rest"
      whileHover="hover"
      variants={scaleOnHover}
    >
      {/* Changed aspect-ratio to square for a more compact look */}
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        {" "}
        {/* Reduced padding from p-6 */}
        <h3 className="text-lg font-bold text-gray-900 mb-0.5">
          {member.name}
        </h3>{" "}
        {/* text-2xl -> text-lg */}
        <p className="text-blue-600 text-xs font-semibold mb-2 uppercase tracking-wide">
          {member.role}
        </p>
        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
          {member.bio}
        </p>{" "}
        {/* Added line-clamp to keep height consistent */}
        {(member.linkedin || member.twitter) && (
          <div className="flex gap-2.5 mt-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
