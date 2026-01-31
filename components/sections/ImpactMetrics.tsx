// ImpactMetrics.tsx
"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import SectionReveal from "@/components/ui/SectionReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { metrics } from "@/data/metrics";

export default function ImpactMetrics() {
  // We attach a ref to the container to track when it's visible
  const ref = useRef(null);

  // 'once: false' is the magic phrase here.
  // It tells Framer Motion to update the state every time the element enters/leaves.
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <SectionReveal>
          <h2 className="text-5xl font-bold text-black text-center mb-16">
            Our <span className="text-red-600">Impact</span>
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {metrics.map((metric, index) => (
            <SectionReveal key={index} className="text-center">
              {/* By adding the isInView status to the key, the counter 
                  resets and re-runs its animation whenever the section 
                  scrolls back into view.
              */}
              <AnimatedCounter
                key={`${index}-${isInView}`}
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
              />
              <p className="text-lg text-gray-600 mt-2">{metric.label}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
