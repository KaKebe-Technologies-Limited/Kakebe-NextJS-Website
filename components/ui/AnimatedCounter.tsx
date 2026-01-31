"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) =>
    Math.floor(current).toLocaleString(),
  );

  useEffect(() => {
    if (!hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [spring, value, hasAnimated]);

  return (
    <span className="text-5xl font-bold text-gray-900">
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
