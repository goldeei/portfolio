import { EXPERIENCE_ITEMS, SiteSections } from '@/constants';
import { ExperienceBody, ExperienceHeader } from '../experience';
import { Section } from '../section';

export const Experience = () => {
  return (
    <Section id={SiteSections.EXPERIENCE} header="Experience">
      <div className="flex flex-col gap-12 pe-12">
        {EXPERIENCE_ITEMS.map((item, index) => (
          <div key={index}>
            <ExperienceHeader {...item} />
            <ExperienceBody description={item.description} skills={item.skills} />
          </div>
        ))}
      </div>
    </Section>
  );
};
