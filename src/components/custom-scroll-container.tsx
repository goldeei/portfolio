import { cn } from '@/lib/style-utils';
import React, { ComponentPropsWithoutRef, ElementType } from 'react';

type CustomScrollContainerProps<T extends ElementType = 'div'> = {
  as?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export const CustomScrollContainer = <T extends ElementType = 'div'>(
  props: CustomScrollContainerProps<T>,
) => {
  const { as, children, className, ...rest } = props;

  const Component = as || 'div';

  return React.createElement(
    Component,
    {
      className: cn('scrollbar', className),
      ...rest,
    },
    children,
  );
};
