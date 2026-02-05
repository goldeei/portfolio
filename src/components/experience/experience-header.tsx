import { Typography } from '../typography';
import { ExperienceItem } from './types';

type ExperienceHeaderProps = Omit<ExperienceItem, 'description' | 'skills'>;

export const ExperienceHeader = ({ company, title, startDate, endDate }: ExperienceHeaderProps) => {
  return (
    <header className="border-border mb-3 border-b pb-1 sm:pb-2">
      <Typography variant="h3" className="mb-0.5 sm:mb-1">
        {title}
      </Typography>
      <div className="flex flex-col gap-0.5 text-sm leading-4 md:flex-row md:justify-between md:gap-4 md:text-base">
        <Typography variant="subtitle" className="font-medium">
          {company}
        </Typography>
        <Typography variant="subtitle">
          {startDate} - {endDate}
        </Typography>
      </div>
    </header>
  );
};
