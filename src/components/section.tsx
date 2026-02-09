import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import { Typography } from './typography';

const sectionVariants = cva('', {
  variants: {
    variant: {
      default: 'mb-12',
      fullHeight: 'min-h-[calc(100svh-var(--header-height))] flex flex-col sm:min-h-fit sm:block',
    },
  },
});

type SectionProps = Omit<HTMLAttributes<HTMLElement>, 'id'> & {
  id: string;
  header?: string;
  variant?: 'default' | 'fullHeight';
  ref?: React.Ref<HTMLElement>;
};

export const Section = ({ id, children, className, header, variant = 'default', ref, ...props }: SectionProps) => {
  return (
    <section id={id} ref={ref} className={cn(sectionVariants({ variant }), className)} {...props}>
      {header && (
        <Typography variant="h2" className="mb-2">
          {header}
        </Typography>
      )}
      {children}
    </section>
  );
};
