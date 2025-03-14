'use client';

import { cn } from '@/lib/style-utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';

type Props = React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
  label?: React.ReactNode;
};

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  Props
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'peer inset-shadow focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-9 w-14 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )}
    {...props}
    ref={ref}
  >
    {props.label}
    <SwitchPrimitives.Thumb
      className={cn(
        'bg-background pointer-events-none block size-[26px] rounded-full shadow ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-3px)] data-[state=unchecked]:translate-x-[3px] [&_svg]:size-5',
      )}
    >
      {props.children}
    </SwitchPrimitives.Thumb>
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
