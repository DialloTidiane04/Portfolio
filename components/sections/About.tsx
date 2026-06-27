import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Développement Front-End",
  "Développement Back-End",
  "Applications Responsive",
  "API REST",
  "Bases de données SQL",
  "UI / UX Moderne",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          badge="À PROPOS"
          title="Qui suis-je ?"
          description="Développeur Full Stack passionné par la création d'applications web modernes et performantes."
        />

        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Photo */}

          <div className="relative flex justify-center">
            <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[120px]" />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900 shadow-2xl shadow-blue-600/20">
              <Image
                src="/images/profile/profile.png"
                alt="Mohamed Tidiane Diallo"
                width={500}
                height={650}
                className="object-cover"
              />
            </div>
          </div>

          {/* Texte */}

          <div>
            <h3 className="text-4xl font-bold text-white">
              Mohamed Tidiane Diallo
            </h3>

            <p className="mt-6 leading-8 text-slate-400">
              Je suis un développeur Full Stack basé au Canada, passionné
              par le développement d'applications web modernes,
              performantes et intuitives.

              Mon objectif est de créer des solutions numériques
              qui apportent une réelle valeur aux entreprises
              et aux utilisateurs.
            </p>

            <p className="mt-6 leading-8 text-slate-400">
              Je travaille principalement avec React, Next.js,
              TypeScript, Node.js et Tailwind CSS.
              J'aime concevoir des interfaces élégantes,
              optimisées et rapides.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    className="text-blue-500"
                    size={22}
                  />

                  <span className="text-slate-300">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <h4 className="text-3xl font-bold text-blue-500">
                    2+
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Projets réalisés
                  </p>
                </div>

                <div>
                  <h4 className="text-3xl font-bold text-blue-500">
                    4+
                  </h4>

                  <p className="mt-2 text-slate-400">
                    Technologies maîtrisées
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}