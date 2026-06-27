import Link from "next/link";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo */}

          <div>

            <Link
              href="/"
              className="text-4xl font-black text-white"
            >
              TD<span className="text-blue-500">.</span>
            </Link>

            <p className="mt-6 max-w-sm leading-8 text-slate-400">
              Développeur Full Stack spécialisé dans la création
              d'applications web modernes, performantes et élégantes.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Navigation
            </h3>

            <ul className="space-y-4">

              <li>
                <Link
                  href="#about"
                  className="text-slate-400 transition hover:text-blue-500"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  href="#services"
                  className="text-slate-400 transition hover:text-blue-500"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="#projects"
                  className="text-slate-400 transition hover:text-blue-500"
                >
                  Projets
                </Link>
              </li>

              <li>
                <Link
                  href="#contact"
                  className="text-slate-400 transition hover:text-blue-500"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Réseaux */}

          <div>

            <h3 className="mb-6 text-xl font-bold text-white">
              Restons en contact
            </h3>

            <div className="flex gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:ton.email@example.com"
                className="rounded-xl border border-slate-700 p-4 text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-500"
              >
                <Mail size={22} />
              </a>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Mohamed Tidiane Diallo.
          Tous droits réservés.
        </div>

      </div>
    </footer>
  );
}