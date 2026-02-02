import { SubTitle } from '../sub-title';
import { ExperienceSkills } from './experience-skills';
import { ExperienceItem } from './types';

type ExperienceHeaderProps = Omit<ExperienceItem, 'description'>;

export const ExperienceHeader = ({ company, title, startDate, endDate, skills }: ExperienceHeaderProps) => {
  return (
    <header className="border-border mb-3 flex flex-col gap-2 border-b pb-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-primary text-2xl font-medium sm:text-3xl">{title}</h3>
        <div className="hidden gap-2 sm:flex">
          <ExperienceSkills skills={skills} />
        </div>
      </div>
      <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <SubTitle>{company}</SubTitle>
        <SubTitle>
          {startDate} - {endDate}
        </SubTitle>
      </div>
    </header>
  );
};
