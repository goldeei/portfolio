import { SiteSections } from '@/constants';
import { Section } from '../section';
import { Typography } from '../typography';
import { TypographyGroup } from '../typography-group';

export const AboutMe = ({ ref }: { ref?: React.Ref<HTMLElement> }) => {
  return (
    <Section id={SiteSections.ABOUT_ME} header="About Me" ref={ref}>
      <TypographyGroup>
        <Typography>
          I work across design and development because the best solutions come from understanding both sides. I find
          ways to make complex data feel clear and build the shared infrastructure that makes all of it work together.
        </Typography>
        <Typography>
          I'd rather spend eight hours building a tool that eliminates a repetitive task than do that task manually for
          the rest of my career. I like building component libraries, creating interfaces that make complicated
          workflows straightforward, and setting up infrastructure that other people can build on.
        </Typography>
        <Typography>
          I enjoy the engineering work - design systems, tooling, automation, infrastructure - but I'm just as
          comfortable working on design and going deep on how things should look and feel. What matters is that the work
          solves real problems and makes the next project easier than the last.
        </Typography>
      </TypographyGroup>
    </Section>
  );
};
