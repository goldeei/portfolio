import { cn } from '@/lib/utils';

export const SubText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-text-muted tracking-[0.15em]', className)}>{children}</p>;
};
