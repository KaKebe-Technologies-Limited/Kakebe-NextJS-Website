import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "kakebe-shop",
    slug: "kakebe-shop",
    title: "Kakebe Shop",
    description:
      "An integrated e-commerce platform designed to bridge the gap between Ugandan innovators and the global market, providing a space for local tech products and hardware.",
    category: "Software Development",
    image: "/images/projects/kakebe-shop.png",
    tags: ["E-commerce", "Next.js", "Payment Integration", "Supply Chain"],
    innovators: ["Sedrick Otolo"],
  },
  {
    id: "2",
    slug: "farmsense",
    title: "FarmSense",
    description: "IoT sensors for precision agriculture in urban environments.",
    category: "IoT",
    image: "/images/projects/green2.jpg",
    tags: ["IoT", "Agriculture", "Sensors"],
    innovators: ["Jerome Oscar"],
  },
];
