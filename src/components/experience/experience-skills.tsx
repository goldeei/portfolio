import { skillIcon } from '../icons';
import { Skill } from './types';

interface ExperienceSkillsProps {
  skills: Skill[];
}

export const ExperienceSkills = ({ skills }: ExperienceSkillsProps) => {
  return skills.map((skill) => {
    const IconComponent = skillIcon[skill.iconKey] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
    return (
      <div
        key={skill.iconKey}
        className="border-primary flex size-8 items-center justify-center rounded-full border p-1 shadow-inner"
        title={skill.label}
      >
        <IconComponent aria-label={skill.label} role="img" />
      </div>
    );
  });
};
