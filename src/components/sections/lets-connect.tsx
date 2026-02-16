import { SiteSections } from '@/constants';
import { ContactCard } from '../contact-card';
import { Section } from '../section';
import { Typography } from '../typography';

const BlurbSection = () => {
  return (
    <Typography className="mb-4 max-w-xl text-center leading-loose text-balance">
      I'm looking for frontend engineering work where I can solve real problems and learn new things. If you're building
      something interesting, let's see where I might fit in.
    </Typography>
  );
};

export const LetsConnect = ({ ref }: { ref?: React.Ref<HTMLElement> }) => {
  return (
    <Section
      id={SiteSections.LETS_CONNECT}
      variant="fullHeight"
      className="mb-0 flex flex-col items-center justify-center [&>h2]:text-center"
      header="Let's Connect"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <BlurbSection />
        <ContactCard />
      </div>
    </Section>
  );
};
