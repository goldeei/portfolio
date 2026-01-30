import { cn } from '@/lib/utils';
import { Section } from '../section';
import { SubText } from '../sub-text';

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Section id="hero" className={cn('flex h-svh flex-col justify-center sm:h-fit', className)}>
      <h1 className="text-primary mb-4 text-6xl font-medium">
        Frontend
        <br />
        Engineer
      </h1>
      <SubText>I build tools and systems that make complex work feel simple.</SubText>
    </Section>
  );
};
