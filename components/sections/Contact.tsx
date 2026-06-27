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
          {/* Carte informations */}

          <div className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">

            <h3 className="text-3xl font-bold text-white">
              Mes coordonnées
            </h3>

            <p className="mt-4 leading-8 text-slate-400">
              Vous recherchez un développeur Full Stack, technicien IT ou souhaitez discuter
              d'un projet ? Contactez-moi.
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

          <form className="rounded-[32px] border border-slate-800 bg-slate-900 p-10">

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Nom complet"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="Adresse e-mail"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Votre message..."
                className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition-all duration-300 hover:bg-blue-500"
              >
                Envoyer le message
              </button>

            </div>

          </form>

        </div>
      </Container>
    </section>
  );
}