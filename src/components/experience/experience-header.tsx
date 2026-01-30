import { skillIcon } from '../icons';
import { ExperienceItem } from './types';

type ExperienceHeaderProps = Omit<ExperienceItem, 'description'>;

export const ExperienceHeader = ({ company, title, startDate, endDate, skills }: ExperienceHeaderProps) => {
  return (
    <header className="border-border mb-3 flex flex-col gap-2 border-b pb-3">
      <div className="flex flex-wrap items-center justify-between">
        <h3 className="text-primary text-3xl font-medium">{title}</h3>
        <div className="flex gap-2">
          {skills.map((skill) => {
            const IconComponent = skillIcon[skill.iconKey] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
            return (
              <div
                key={skill.iconKey}
                className="border-primary flex size-8 items-center justify-center rounded-full border p-1 shadow-inner"
              >
                <IconComponent aria-label={skill.label} role="img" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-text-muted">{company}</div>
        <div className="text-text-muted">
          {startDate} - {endDate}
        </div>
      </div>
    </header>
  );
};
