import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { techStack } from "@/data/techStack";

export default function TechStack() {
  return (
    <section
      id="techstack"
      className="bg-slate-950 py-32"
    >
      <Container>

        <SectionTitle
          badge="TECH STACK"
          title="Technologies"
          description="Les technologies que j'utilise pour développer des applications modernes, rapides et évolutives."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

          {techStack.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group rounded-[28px] border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/20"
              >
                <div className="flex flex-col items-center">

                  <Icon
                    size={60}
                    className="transition duration-300 group-hover:scale-110"
                  />

                  <h3 className="mt-6 text-xl font-semibold text-white">
                    {tech.name}
                  </h3>

                </div>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}