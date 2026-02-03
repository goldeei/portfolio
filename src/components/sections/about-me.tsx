import { SiteSections } from '@/constants';
import { Section } from '../section';
import { Typography } from '../typography';

export const AboutMe = () => {
  return (
    <Section id={SiteSections.ABOUT_ME} className="overflow-visible" header="About Me">
      <Typography>
        I work across design and development - translating ideas in Figma into React components, finding creative ways
        to display complex data, and building the infrastructure that makes both feel seamless. Good software shouldn't
        just work, it should feel intuitive to use and straightforward to extend.
        <br />
        <br />
        I like creating component libraries that other engineers want to use, designing interfaces that make complicated
        workflows clear, and building foundations once so teams don't rebuild them every project. I work with React,
        TypeScript, Tailwind, and modern tooling to create systems where the foundation gets stronger as you build on
        it. Small teams need infrastructure that enables speed, not slows it down. That's what I focus on building.
        <br />
        <br />I enjoy wearing multiple hats, but I'm just as happy going deep on the engineering side - building design
        systems, developer tooling, or infrastructure that makes shipping reliable software faster.{' '}
      </Typography>
    </Section>
  );
};
