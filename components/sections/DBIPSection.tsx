"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { staggerContainer } from "@/lib/animations";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function DBIPSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-red-950 text-white relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600 rounded-full opacity-10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-800 rounded-full opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
              Now Open · May – August 2026
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-black mb-6 leading-tight"
          >
            Digital Bridge{" "}
            <span className="text-red-500">Internship Program</span>{" "}
            <span className="text-gray-300">(DBIP)</span>
          </motion.h2>

          {/* Description paragraphs */}
          <motion.div
            variants={fadeInUp}
            className="space-y-4 text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-10"
          >
            <p>
              Maarifasasa and Kakebe Technologies bring you the impactful{" "}
              <strong className="text-white">
                Digital Bridge Internship Program
              </strong>{" "}
              in Lira City.
            </p>
            <p>
              Pioneering ICT and innovation in Lira City, Lango Sub-Region –
              Northern Uganda, Maarifasasa Limited and Kakebe Technologies are
              launching the Digital Bridge Internship Program (DBIP).
            </p>
            <p>
              This opportunity is open to students and passionate individuals in{" "}
              <strong className="text-white">
                IT, Business, Animation, and related fields
              </strong>
              , running from <strong className="text-white">May to August 2026</strong>,
              focusing on digital skills, innovation, entrepreneurship, and
              professional growth.
            </p>
            <p className="text-white font-semibold text-xl">
              Stay alert for applications and get ready to build your future.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp}>
            <Link
              href="https://bit.ly/the-dbip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg shadow-red-900/40 hover:shadow-red-800/60 transition-all duration-300 hover:-translate-y-0.5"
            >
              Apply Now →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
