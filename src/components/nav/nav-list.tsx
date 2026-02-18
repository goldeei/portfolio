import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const navListVariants = cva('flex flex-col justify-center border-border h-fit', {
  variants: {
    variant: {
      desktop: 'border-l gap-8 py-4',
      mobile: 'py-8 gap-8 ms-4',
    },
  },
});

export const NavList = ({
  children,
  className,
  variant = 'desktop',
}: VariantProps<typeof navListVariants> & {
  children: React.ReactNode;
  className?: string;
  variant?: 'desktop' | 'mobile';
}) => {
  return <ul className={cn(navListVariants({ variant, className }))}>{children}</ul>;
};
