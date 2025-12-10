import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experiences";

const ExperiencesPage = () => {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-accent-2">Currículo</p>
        <h1 className="text-3xl font-bold text-white">Experiências</h1>
      </header>
      <div className="space-y-1 text-sm text-slate-400">Linha do tempo em ordem cronológica (mais recente primeiro).</div>
      <div className="relative mt-2">
        <div className="absolute left-[18px] top-4 bottom-4 w-px bg-slate-800/70" aria-hidden />
        <div className="space-y-5">
          {experiences.map((experience, index) => (
            <div key={experience.id} className="relative flex gap-4">
              <div className="relative flex flex-col items-center pt-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 bg-surface text-xs font-semibold text-accent">
                  
                </div>
              </div>
              <div className="flex-1">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencesPage;
