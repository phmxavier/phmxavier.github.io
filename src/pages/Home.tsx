import { Link } from "react-router-dom";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experiences";
import { socialLinks } from "../data/socialLinks";
import { HashnodePosts } from "../components/HashnodePosts";

const HomePage = () => {
  const latestExperiences = experiences.slice(0, 2);

  return (
    <div className="space-y-12">
      <section className="relative mt-8 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-surface-2 via-surface-2 to-surface p-8 shadow-2xl shadow-black/30 sm:p-12">
        <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-accent-2/20 blur-3xl" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-accent-2">Olá, eu sou</p>
            <h1 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              Pedro Xavier
              <span className="block text-lg font-medium text-accent">
                Tech Manager & Especialista em Engenharia de Software
              </span>
            </h1>
            <p className="text-lg text-slate-200">
              Lidero times de produto em fintech, conectando engenharia, negócios e parceiros para lançar experiências
              digitais de alto impacto. Atuo em arquitetura, estratégia técnica e cultura de engenharia, mantendo foco em
              qualidade, observabilidade e entregas consistentes.
            </p>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/experiences"
                  className="rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-2 hover:text-surface"
                >
                  Ver currículo
                </Link>
                <a
                  href="https://www.linkedin.com/in/phmxavier"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-accent px-5 py-3 text-sm font-semibold text-accent transition hover:border-accent-2 hover:text-accent-2"
                >
                  Ver perfil no LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-2xl border border-accent/40 bg-slate-900/60 shadow-xl shadow-accent/30">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQEaZ6cfa0Gcbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1675086488560?e=1766016000&v=beta&t=LIlIGitWiArRZFAJ57Fd_HITGS6h7hmIEd5iZZmkssU"
              alt="Foto de perfil de Pedro Xavier"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(124,58,237,0.25),transparent_45%)]" />
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2 pt-4" aria-label="Links de contato">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/60 text-slate-200 transition hover:border-accent hover:text-accent"
            >
              <link.icon className="h-5 w-5" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="latest-experiences" className="space-y-4">
        <div className="flex items-baseline justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-accent-2">Experiências</p>
            <h2 id="latest-experiences" className="text-2xl font-semibold text-white">
              Últimas experiências
            </h2>
          </div>
          <Link to="/experiences" className="text-sm font-medium text-accent hover:text-accent-2">
            Ver todas
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {latestExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </section>

      <HashnodePosts limit={2} />

    </div>
  );
};

export default HomePage;
