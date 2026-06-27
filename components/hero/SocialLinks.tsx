"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4">

      <Link
        href="https://github.com/DialloTidiane04"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500"
      >
        <FaGithub size={22} />
      </Link>

      <Link
        href="https://www.linkedin.com/in/mohamed-tidiane-diallo-29b114414/"
        target="_blank"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500"
      >
        <FaLinkedin size={22} />
      </Link>

      <Link
        href="mailto:tididiallo04@gmail.com"
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500"
      >
        <Mail size={20} />
      </Link>

    </div>
  );
}