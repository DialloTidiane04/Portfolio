"use client";

import { MapPin, Briefcase } from "lucide-react";

import Button from "../ui/Button";
import SocialLinks from "./SocialLinks";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="max-w-2xl">

      <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-400">
        👋 Bonjour, je suis
      </span>

      <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
        Mohamed
        <br />

        <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
          Tidiane Diallo
        </span>
      </h1>

      <h2 className="mt-6 text-2xl font-semibold text-slate-300">
        Développeur Full Stack
      </h2>

      <p className="mt-8 text-lg leading-9 text-slate-400">
        Je développe des applications web modernes, rapides et évolutives.
        Mon objectif est d'aider les entreprises à créer des solutions
        numériques performantes grâce à React, Next.js, TypeScript et Node.js.
      </p>

      <div className="mt-8 flex flex-wrap gap-8 text-base">

        <div className="flex items-center gap-2 text-slate-300">
          <MapPin size={20} className="text-blue-500" />
          Ontario, Canada
        </div>

        <div className="flex items-center gap-2 font-semibold text-green-400">
          <Briefcase size={20} />
          Disponible pour un emploi
        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-5">

        <Button href="#projects" size="lg">
          Voir mes projets
        </Button>

        <Button
          href="/cv.pdf"
          variant="secondary"
          size="lg"
        >
          Télécharger mon CV
        </Button>

      </div>

      <div className="mt-10">
        <SocialLinks />
      </div>

      <div className="mt-14">
        <HeroStats />
      </div>

    </div>
  );
}