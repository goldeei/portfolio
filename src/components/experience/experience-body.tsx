import { Typography } from '../typography';
import { ExperienceItem } from './types';

type ExperienceBodyProps = Pick<ExperienceItem, 'description'>;

export const ExperienceBody = ({ description }: ExperienceBodyProps) => {
  return (
    <>
      {description.map((paragraph, index) => (
        <Typography variant="body" key={index} className={index > 0 ? 'mt-2' : undefined}>
          {paragraph}
        </Typography>
      ))}
    </>
  );
};
