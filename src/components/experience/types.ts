import { SKILL_ICON_MAP } from './skill-icon-map';

export type SkillIcon = keyof typeof SKILL_ICON_MAP;

export type Skill = {
  label: string;
  iconKey: SkillIcon;
};

export type ExperienceItem = {
  company: string;
  title: string;
  description: string[];
  startDate: string;
  endDate: string;
  skills: Skill[];
};
