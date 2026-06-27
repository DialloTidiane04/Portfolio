import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 py-32"
    >
      <Container>
        <SectionTitle
          badge="CONTACT"
          title="Travaillons ensemble"
          description="Je suis actuellement disponible pour un emploi à temps plein ainsi que pour des missions freelance."
        />

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Carte Informations */}

          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">

            <h3 className="text-3xl font-bold text-white">
              Mes coordonnées
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Vous recherchez un développeur Full Stack, technicien IT
              ou souhaitez discuter d'un projet ?
              Contactez-moi.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-4">
                <Mail className="text-blue-500" />

                <span className="text-slate-300">
                  tididiallo04@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-500" />

                <span className="text-slate-300">
                  +1 (343) 324-0734
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-500" />

                <span className="text-slate-300">
                  Ontario, Canada
                </span>
              </div>

            </div>

            <div className="mt-10 flex gap-4">

              <a
                href="https://github.com/DialloTidiane04"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/mohamed-tidiane-diallo-29b114414/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </div>

          {/* Formulaire */}

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}