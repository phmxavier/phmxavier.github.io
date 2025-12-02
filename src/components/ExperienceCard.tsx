import { Experience } from "../data/experiences";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="rounded-xl border border-slate-800 bg-surface-2 p-5 shadow-lg shadow-black/20">
      <div className="flex items-baseline justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
          <p className="text-sm text-accent-2">{experience.company}</p>
        </div>
        <span className="text-xs text-slate-400">{experience.period}</span>
      </div>
      <p className="mt-3 text-sm text-slate-200">{experience.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.techs.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-800/60 px-3 py-1 text-xs text-slate-100 border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
