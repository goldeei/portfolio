import { ExperienceProps } from './types';

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: '2-digit',
};

export const Experience = ({ ...props }: ExperienceProps) => {
  const { startDate, endDate, summary, achievements, projects } = props;

  return (
    <div className="flex max-h-full flex-col gap-4">
      <div className="text-sm text-secondary/80">
        {startDate.toLocaleDateString(undefined, dateOptions)} -{' '}
        {endDate.toLocaleString(undefined, dateOptions)}
      </div>
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
