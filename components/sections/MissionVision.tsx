"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function MissionVision() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeInUp}
              className="text-red-600 font-semibold tracking-wider uppercase mb-4"
            >
              Our Purpose
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6"
            >
              What Drives <span className="text-red-600">Us Forward</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              The mission and vision that guide every initiative we undertake at
              Kakebe Technologies.
            </motion.p>
          </motion.div>

          {/* Mission and Vision Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard("mission")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-500 ${
                hoveredCard === "mission"
                  ? "transform -translate-y-2 shadow-2xl"
                  : "shadow-xl"
              }`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-red-900" />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid-mission"
                      width="10"
                      height="10"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 10 0 L 0 0 0 10"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid-mission)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative p-10 md:p-12 h-full min-h-[400px] flex flex-col">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>

                {/* Label */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                    Mission
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  We strive to provide enhanced technology services to improve
                  businesses and productivity.
                </h3>

                {/* Description */}
                <p className="text-white/90 text-lg leading-relaxed flex-grow">
                  Building on competencies and customer interests, and creating
                  value for our stakeholders and customers through innovative
                  technology solutions.
                </p>

                {/* Decorative Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 text-white/30"
                  animate={{
                    x: hoveredCard === "mission" ? 5 : 0,
                    y: hoveredCard === "mission" ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCard("vision")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`relative group rounded-3xl overflow-hidden transition-all duration-500 ${
                hoveredCard === "vision"
                  ? "transform -translate-y-2 shadow-2xl"
                  : "shadow-xl"
              }`}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />

              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <pattern
                      id="grid-vision"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid-vision)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative p-10 md:p-12 h-full min-h-[400px] flex flex-col">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-red-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="w-8 h-8 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </motion.div>

                {/* Label */}
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="px-4 py-1 bg-red-600/20 backdrop-blur-sm rounded-full text-red-400 text-sm font-semibold">
                    Vision
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
                  Creating a better everyday life using science and technology
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-lg leading-relaxed flex-grow">
                  We envision a Northern Uganda where technology empowers every
                  community, where young innovators build solutions that
                  transform lives, and where innovation leads the regions
                  digital revolution.
                </p>

                {/* Decorative Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 text-red-500/30"
                  animate={{
                    x: hoveredCard === "vision" ? 5 : 0,
                    y: hoveredCard === "vision" ? -5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-12 h-12"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "2020", label: "Founded" },
              { number: "500+", label: "Youth Trained" },
              { number: "50+", label: "Projects Delivered" },
              { number: "10+", label: "Partner Schools" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-black text-red-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
