import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-950 py-32"
    >
      <Container>

        <SectionTitle
          badge="SERVICES"
          title="Ce que je propose"
          description="J'accompagne les entreprises et les particuliers dans la création de solutions web modernes et performantes."
        />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-[30px] border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-600/20"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 transition duration-300 group-hover:scale-110">
                  <Icon size={34} />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}