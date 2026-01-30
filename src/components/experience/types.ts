import { SkillIcon } from '../icons';

export type Skill = {
  label: string;
  iconKey: SkillIcon;
};

export type ExperienceItem = {
  company: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  skills: Skill[];
};
