import { SiteSections } from '@/constants';
import { BodyText } from '../body-text';
import { ContactCard } from '../contact-card';
import { Section } from '../section';

const BlurbSection = () => {
  return (
    <BodyText className="max-w-xl text-center">
      I'm looking for frontend engineering work where I can solve real problems and learn new things. If you're building
      something interesting, let's see where I might fit in.
    </BodyText>
  );
};

export const LetsConnect = () => {
  return (
    <Section id={SiteSections.LETS_CONNECT} className="flex flex-col items-center gap-4" header="Let's Connect">
      <BlurbSection />
      <ContactCard />
    </Section>
  );
};
