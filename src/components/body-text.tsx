import { cn } from '@/lib/utils';

export const BodyText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-text-secondary text-base tracking-[0.15em]', className)}>{children}</p>;
};
