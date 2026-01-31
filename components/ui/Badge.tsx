interface BadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "blue";
}

export default function Badge({ children, variant = "light" }: BadgeProps) {
  const variants = {
    light: "bg-gray-100 text-gray-700",
    dark: "bg-gray-900 text-white",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
