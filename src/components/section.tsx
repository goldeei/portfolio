import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import { Typography } from './typography';

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & {
  id: string;
  header?: string;
};

export const Section = ({ id, children, className, header, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn('mb-12 h-fit', className)} {...props}>
      {header && (
        <Typography variant="h2" className="mb-2">
          {header}
        </Typography>
      )}
      {children}
    </section>
  );
};
