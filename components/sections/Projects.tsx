import Container from "@/components/ui/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";
import FadeIn from "@/components/ui/FadeIn";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-32"
    >
      {/* Fond lumineux */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb12,transparent_65%)]" />

      <Container>
        <FadeIn>
          <SectionTitle
            badge="MES PROJETS"
            title="Mes réalisations"
            description="Découvrez quelques projets que j'ai développés avec des technologies modernes en mettant l'accent sur la performance, le responsive design et l'expérience utilisateur."
          />
        </FadeIn>

        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.15}
            >
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}