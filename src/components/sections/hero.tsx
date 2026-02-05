import { cn } from '@/lib/utils';
import { Section } from '../section';
import { Typography } from '../typography';

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Section
      id="hero"
      className={cn('flex h-svh max-w-[400px] flex-col justify-center gap-2 sm:h-fit sm:max-w-full', className)}
    >
      <Typography variant="h1">
        Frontend
        <br />
        Engineer
      </Typography>
      <Typography variant="subtitle" className="mt-2 text-xl text-balance sm:mt-1 sm:text-base md:text-lg">
        I build tools and systems that make complex work feel simple.
      </Typography>
    </Section>
  );
};
