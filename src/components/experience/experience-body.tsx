import { Typography } from '../typography';
import { TypographyGroup } from '../typography-group';
import { ExperienceItem } from './types';

type ExperienceBodyProps = Pick<ExperienceItem, 'description'>;

export const ExperienceBody = ({ description }: ExperienceBodyProps) => {
  return (
    <TypographyGroup>
      {description.map((paragraph, index) => (
        <Typography variant="body" key={index}>
          {paragraph}
        </Typography>
      ))}
    </TypographyGroup>
  );
};
