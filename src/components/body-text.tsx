import { cn } from '@/lib/utils';

export const BodyText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <p className={cn('text-text-secondary text-sm leading-7 tracking-widest sm:text-base sm:leading-8', className)}>
      {children}
    </p>
  );
};
