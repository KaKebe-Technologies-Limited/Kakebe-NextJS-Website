"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import ProjectCard from "@/components/cards/ProjectCard";
import SectionReveal from "@/components/ui/SectionReveal";
import { projects } from "@/data/projects";
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

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    "all",
    ...Array.from(new Set(projects.map((p) => p.category))),
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <main className="pt-20">
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-red-600 to-black text-white py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">Our Projects</h1>
          <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
            Real solutions built by our innovators for real-world problems.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all capitalize ${
                  filter === category
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Total Projects", value: projects.length },
              {
                label: "Active Projects",
                value: Math.floor(projects.length * 0.7),
              },
              { label: "Industries Served", value: categories.length - 1 },
              { label: "Lives Impacted", value: "10K+" },
            ].map((stat) => (
              <SectionReveal key={stat.label}>
                <div className="text-4xl font-black text-indigo-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">
                  {stat.label}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={filter}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={FadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Project Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionReveal>
            <h2 className="text-4xl text-black font-bold mb-4 text-center">
              Project Spotlight
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-16">
              Every month, we feature projects that are making exceptional
              impact in their communities.
            </p>
          </SectionReveal>

          {projects.length > 0 && (
            <SectionReveal>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto relative">
                    <img
                      src={projects[0].image}
                      alt={projects[0].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-12">
                    <div className="inline-block px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-semibold mb-4">
                      Featured Project
                    </div>
                    <h3 className="text-3xl font-bold text-black mb-4">
                      {projects[0].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {projects[0].description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      <strong>Category:</strong> {projects[0].category}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-red-600 to-black text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Have a Project Idea?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              We're always looking for innovative solutions to real problems.
              Let's build something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-indigo-600 hover:bg-gray-100 rounded-lg font-bold text-lg transition-colors shadow-xl"
            >
              Start a Conversation
            </a>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
