import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl md:text-5xl font-medium tracking-wide text-primary',
      h2: 'scroll-m-20 text-sm font-semibold tracking-widest text-foreground-tertiary uppercase',
      h3: 'scroll-m-20 text-xl md:text-2xl font-semibold tracking-wide text-primary',
      body: 'text-sm md:text-base leading-6 text-foreground-secondary',
      subtitle: 'text-foreground-tertiary tracking-wider',
      caption: 'text-sm text-foreground-tertiary',
      muted: 'text-foreground-tertiary',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TypographyProps extends VariantProps<typeof typographyVariants> {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export const Typography = ({ children, className, variant, as }: TypographyProps) => {
  const defaultElement: Record<string, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    subtitle: 'p',
    caption: 'span',
    muted: 'span',
  };

  const Component = as || defaultElement[variant || 'body'];

  return <Component className={cn(typographyVariants({ variant }), className)}>{children}</Component>;
};
