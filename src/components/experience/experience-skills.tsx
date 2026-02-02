import { SKILL_ICON_MAP } from './skill-icon-map';
import { Skill } from './types';

interface ExperienceSkillsProps {
  skills: Skill[];
}

export const ExperienceSkills = ({ skills }: ExperienceSkillsProps) => {
  return skills.map((skill) => {
    const IconComponent = SKILL_ICON_MAP[skill.iconKey];
    return (
      <div
        key={skill.iconKey}
        className="border-primary flex size-8 items-center justify-center rounded-full border p-1 shadow-inner"
        title={skill.label}
      >
        <IconComponent aria-hidden="true" />
      </div>
    );
  });
};
