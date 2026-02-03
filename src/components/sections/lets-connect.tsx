import { SiteSections } from '@/constants';
import { ContactCard } from '../contact-card';
import { Section } from '../section';

const BlurbSection = () => {
  return (
    <div className="text-muted text-text-secondary">
      I'm looking for frontend engineering work where I can solve real problems and learn new things. If you're building
      something interesting, let's see where I might fit in.
    </div>
  );
};

export const LetsConnect = () => {
  return (
    <Section id={SiteSections.LETS_CONNECT} className="flex flex-col items-center justify-center gap-12">
      <BlurbSection />

      <ContactCard />
    </Section>
  );
};
