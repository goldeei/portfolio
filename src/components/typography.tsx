import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import { ElementType } from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      body: 'leading-7 text-foreground',
      subtitle: 'text-foreground-secondary text-sm tracking-wider sm:text-base',
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
