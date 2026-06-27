import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition-all duration-300";

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary:
      "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40",

    secondary:
      "border border-slate-700 bg-slate-900 text-slate-200 hover:border-blue-500 hover:bg-slate-800 hover:text-white",
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${sizes[size]} ${variants[variant]}`}
      >
        {children}
        <ArrowRight size={18} />
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]}`}
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}