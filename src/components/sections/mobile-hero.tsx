import { cn } from '@/lib/utils';
import { HeroContent } from '../HeroContent';
import { Section } from '../section';

export const MobileHero = ({ className }: { className?: string }) => {
  return (
    <Section id="mobile-hero" className={cn('flex h-dvh flex-col justify-center', className)}>
      <HeroContent />
    </Section>
  );
};
