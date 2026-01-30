import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & {
  id: string;
  header?: string;
};

export const Section = ({ id, children, className, header, ...props }: SectionProps) => {
  return (
    <section id={id} className={cn('mb-12 h-fit', className)} {...props}>
      {header && <h2 className="text-primary mb-2 text-2xl font-bold">{header}</h2>}
      {children}
    </section>
  );
};
