import { BodyText } from '../body-text';
import { ExperienceSkills } from './experience-skills';
import { ExperienceItem } from './types';

type ExperienceBodyProps = Pick<ExperienceItem, 'description' | 'skills'>;

export const ExperienceBody = ({ description, skills }: ExperienceBodyProps) => {
  return (
    <>
      {description.map((paragraph, index) => (
        <BodyText key={index} className={index > 0 ? 'mt-2' : undefined}>
          {paragraph}
        </BodyText>
      ))}
      <div className="mt-4 flex justify-center gap-3 sm:hidden">
        <ExperienceSkills skills={skills} />
      </div>
    </>
  );
};
