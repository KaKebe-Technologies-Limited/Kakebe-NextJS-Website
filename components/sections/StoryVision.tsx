"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import SectionReveal from "@/components/ui/SectionReveal";
import { fadeInUp } from "@/lib/animations";
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function StorySection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <h2 className="text-5xl text-black font-bold mb-6">
              About <span className="text-red-600">Kakebe</span>
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                Kakebe Technologies is a youth-led technology company with headquarters in Lira City offering science and technological services to the public in a time-saving, fast and efficient way.
              </p>
              <p>
                We provide enhanced IT services to improve productivity and efficiency in businesses, organisations and companies, building on technologies to improve livelihood.
              </p>
              <p>
                Kakebe builds your ideas to reality ranging from websites, mobile apps, robotics, management systems and offering internship trainings to different students in the region.
              </p>
              <p className="font-semibold text-gray-900">
                Started in 2020 from the inspiration of young people to grow the Northern Region with great and competent technologies to improve the livelihoods of the local people.
              </p>
            </div>
          </SectionReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
            className="relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero/sedrickotolo.JPG"
                alt="Early days at Kakebe"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-sm text-gray-600 italic">
                "We didn't set out to build a tech hub. We set out to build a
                community."
              </p>
              <p className="text-sm font-bold text-gray-900 mt-2">
                Sedrick Otolo, Founder
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
