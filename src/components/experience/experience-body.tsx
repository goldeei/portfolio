import { BodyText } from '../body-text';
import { ExperienceItem } from './types';

type ExperienceBodyProps = Pick<ExperienceItem, 'description'>;

export const ExperienceBody = ({ description }: ExperienceBodyProps) => {
  return <BodyText>{description}</BodyText>;
};
