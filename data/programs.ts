import { Program } from "@/lib/types";

export const programs: Program[] = [
  {
    id: "training",
    title: "Technical Training",
    description:
      "Intensive, project-based programs in software development, AI, IoT, and design.",
    icon: "🎓",
    features: [
      "12-week immersive bootcamps",
      "Real-world project experience",
      "Industry mentorship",
      "Job placement support",
    ],
  },
  {
    id: "incubation",
    title: "Startup Incubation",
    description:
      "We provide space, mentorship, and funding support for early-stage tech ventures.",
    icon: "🚀",
    features: [
      "Co-working space access",
      "Seed funding opportunities",
      "Business model coaching",
      "Investor connections",
    ],
  },
  {
    id: "services",
    title: "Tech Services",
    description:
      "Custom software development, consulting, and technical advisory for organizations.",
    icon: "⚙️",
    features: [
      "Web & mobile development",
      "AI/ML integration",
      "Cloud infrastructure",
      "Technical training for teams",
    ],
  },
];
