import Image from "next/image";
import { ExternalLink } from "lucide-react";

import Badge from "./Badge";
import Button from "./Button";

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_25px_80px_rgba(37,99,235,0.25)]">

      {/* Image */}
      <div className="relative overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={900}
          priority={project.id === 1}
          className="h-[430px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Badge */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full border border-blue-500/30 bg-blue-600/20 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-blue-300 backdrop-blur-xl">
            {project.subtitle}
          </span>
        </div>

      </div>

      {/* Contenu */}
      <div className="p-8 lg:p-10">

        <h3 className="text-3xl font-black text-white lg:text-4xl">
          {project.title}
        </h3>

        <p className="mt-5 text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {/* Boutons */}
        <div className="mt-10 flex flex-wrap gap-4">

          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              external
              size="sm"
            >
              <ExternalLink size={18} />
              Voir le site
            </Button>
          )}

          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              external
              variant="secondary"
              size="sm"
            >
              GitHub
            </Button>
          )}

        </div>

      </div>

    </article>
  );
}