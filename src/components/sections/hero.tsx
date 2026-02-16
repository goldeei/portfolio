import { cn } from '@/lib/utils';
import { Section } from '../section';
import { Typography } from '../typography';

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Section id="hero" className={cn('max-w-[400px] justify-center sm:max-w-full', className)} variant="fullHeight">
      <Typography variant="h1">
        Frontend
        <br />
        Engineer
      </Typography>
      <Typography variant="subtitle" className="mt-3 text-xl sm:text-base md:text-lg">
        Solving problems across design, code, and infrastructure.
      </Typography>
    </Section>
  );
};
