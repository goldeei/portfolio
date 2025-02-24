export interface ExperienceProps {
  startDate: Date;
  endDate: Date | 'Present';
  summary: string;
  achievements: string[];
  projects: string[];
}
