import { Innovator } from "@/lib/types";

export const innovators: Innovator[] = [
  {
    id: "1",
    slug: "Derick Desderio",
    name: "Derick Desderio",
    tagline: "Full-Stack Developer & AI Enthusiast",
    image: "/images/innovators/bododesderio.jpeg",
    bio: "Derick is building intelligent automation tools for small businesses across East Uganda. She believes AI should be accessible to everyone.",
    projects: ["SmartVendor", "AgriPredict"],
    skills: ["Python", "React", "TensorFlow", "PostgreSQL"],
    quote:
      "Technology is only powerful when it solves real problems for real people.",
    featured: true,
  },
  {
    id: "2",
    slug: "Jerome Oscar",
    name: "Jerome Oscar",
    tagline: "IoT Engineer & Hardware Hacker",
    image: "/images/innovators/oscarjerome.png",
    bio: "Jerome designs low-cost IoT solutions for urban farming and resource management.",
    projects: ["FarmSense", "WaterWatch"],
    skills: ["Arduino", "C++", "MQTT", "Node.js"],
    featured: true,
  },
];
