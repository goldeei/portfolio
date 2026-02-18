import { EXPERIENCE_ITEMS, SiteSections } from '@/constants';
import { useIsMobile } from '@/hooks';
import { FileUser } from 'lucide-react';
import { ExperienceBody, ExperienceHeader, ExperienceSkills } from '../experience';
import { ResumeDialog } from '../resume-dialog';
import { Section } from '../section';
import { Button } from '../ui/button';

export const Experience = ({ ref }: { ref?: React.Ref<HTMLElement> }) => {
  const isMobile = useIsMobile();

  return (
    <Section id={SiteSections.EXPERIENCE} header="Experience" ref={ref}>
      <div className="flex flex-col gap-12">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <div key={index}>
            <ExperienceHeader {...item} />
            <ExperienceBody description={item.description} />
            <div className="mt-6 flex justify-center gap-4">
              <ExperienceSkills skills={item.skills} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {isMobile ? (
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileUser />
              View Full Resume
            </a>
          </Button>
        ) : (
          <ResumeDialog />
        )}
      </div>
    </Section>
  );
};
