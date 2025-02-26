import { ExperienceProps } from './types';

export const Experience = ({ ...props }: ExperienceProps) => {
  const { summary, achievements, projects } = props;

  return (
    <div className="flex max-h-full flex-col gap-4">
      <div className="">{summary}</div>
      <div>
        <h4 className="text-xl font-medium">Achievements</h4>
        <ul>
          {achievements.map((a) => (
            <li key={a}>- {a}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-medium">Projects</h4>
        <ul>
          {projects.map((p) => (
            <li key={p}>- {p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
