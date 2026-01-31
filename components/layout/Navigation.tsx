"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavigationProps {
  isScrolled: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
}

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/innovators", label: "Innovators" },
  { href: "/team", label: "Team" },
  { href: "/programs", label: "Programs" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation({
  isScrolled,
  isMobile = false,
  onItemClick,
}: NavigationProps) {
  const pathname = usePathname();

  if (isMobile) {
    return (
      <nav className="py-4 px-6">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onItemClick}
                  className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex items-center space-x-8">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`relative font-medium transition-colors ${
                  isScrolled
                    ? isActive
                      ? "text-red-600"
                      : "text-gray-700 hover:text-red-600"
                    : isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-600"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
