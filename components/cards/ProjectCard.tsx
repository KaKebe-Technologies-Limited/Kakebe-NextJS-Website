"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/types";
import Badge from "@/components/ui/Badge";

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

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        className="group relative overflow-hidden rounded-2xl bg-white shadow-lg h-full flex flex-col"
        initial="rest"
        whileHover="hover"
        variants={scaleOnHover}
      >
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="dark">{project.category}</Badge>
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-black mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4 flex-1">{project.description}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="light">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
