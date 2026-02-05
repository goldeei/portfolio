import { EXPERIENCE_ITEMS, SiteSections } from '@/constants';
import { useIsMobile } from '@/hooks';
import { ExperienceBody, ExperienceHeader, ExperienceSkills } from '../experience';
import { ResumeDialog } from '../resume-dialog';
import { ResumeTrigger } from '../resume-trigger';
import { Section } from '../section';

export const Experience = () => {
  const isMobile = useIsMobile();

  return (
    <Section id={SiteSections.EXPERIENCE} header="Experience">
      <div className="flex flex-col gap-12 sm:pe-12">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <div key={index}>
            <ExperienceHeader {...item} />
            <ExperienceBody description={item.description} />
            <div className="mt-6 flex justify-center gap-4">
              <ExperienceSkills skills={item.skills} />
            </div>
          </div>
        ))}
        {isMobile ? (
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <ResumeTrigger className="w-full" />
          </a>
        ) : (
          <ResumeDialog />
        )}
      </div>
    </Section>
  );
};
