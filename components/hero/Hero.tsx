"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Fond lumineux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb22,transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 py-28 lg:flex-row">

        <HeroContent />

        <HeroImage />

      </div>

    </section>
  );
}