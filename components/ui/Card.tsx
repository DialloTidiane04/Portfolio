import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/80
        p-8
        backdrop-blur-md
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}