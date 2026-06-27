"use client";

import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Halo principal */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-600/20 blur-[120px]" />

      {/* Halo secondaire */}
      <div className="absolute h-[380px] w-[380px] rounded-full bg-cyan-500/20 blur-[90px]" />

      {/* Carte photo */}
      <div className="relative overflow-hidden rounded-[36px] border border-slate-800 bg-slate-900 shadow-[0_25px_80px_rgba(37,99,235,0.25)] transition-all duration-500 hover:-translate-y-2">

        <Image
  src="/images/profile/profile.png"
  alt="Mohamed Tidiane Diallo"
  width={520}
  height={700}
  priority
  className="w-full max-w-[500px] h-auto object-cover"
/>

      </div>

      {/* Carte flottante */}
      <div className="absolute -bottom-6 left-1/2 w-[280px] -translate-x-1/2 rounded-2xl border border-slate-800 bg-slate-900/90 p-5 backdrop-blur-xl shadow-xl">

        <p className="text-sm font-semibold text-blue-400">
          Développeur Full Stack
        </p>

        <p className="mt-2 text-lg font-bold text-white">
          Disponible immédiatement
        </p>

        <p className="mt-1 text-sm text-slate-400">
          Ontario, Canada
        </p>

      </div>

    </div>
  );
}