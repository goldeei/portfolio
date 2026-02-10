import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
        interactive:
          'text-foreground-tertiary hover:bg-background-secondary focus:bg-background-secondary rounded-md transition-colors p-1.5',
        nav: 'text-muted hover:text-gray-700 aria-[current=page]:text-text-primary aria-[current=page]:hover:text-text-primary/90',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
        'icon-minimal': 'p-1.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

interface BaseButtonProps extends VariantProps<typeof buttonVariants> {
  className?: string;
  asChild?: boolean;
  children: React.ReactNode;
}

type ButtonAsButton = BaseButtonProps &
  Omit<React.ComponentProps<'button'>, 'type'> & {
    type?: 'button' | 'submit' | 'reset';
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.ComponentProps<typeof Link>, 'href'> & {
    type: 'link';
    href: string | URL;
  };

type ButtonAsAnchor = BaseButtonProps &
  Omit<React.ComponentProps<'a'>, 'href'> & {
    type: 'anchor';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsAnchor;

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = cn(buttonVariants({ variant, size, className }));
  const dataAttrs = {
    'data-slot': 'button',
    'data-variant': variant,
    'data-size': size,
  };

  // Render as Next.js Link
  if ('type' in props && props.type === 'link') {
    const { type, href, ...linkProps } = props;
    return (
      <Link href={href} className={buttonClasses} {...dataAttrs} {...linkProps}>
        {children}
      </Link>
    );
  }

  // Render as anchor tag
  if ('type' in props && props.type === 'anchor') {
    const { type, href, ...anchorProps } = props;
    return (
      <a href={href} className={buttonClasses} {...dataAttrs} {...anchorProps}>
        {children}
      </a>
    );
  }

  // Render as button (default)
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp className={buttonClasses} {...dataAttrs} {...props}>
      {children}
    </Comp>
  );
}

export { Button, buttonVariants };
