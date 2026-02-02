import React from 'react';
import { cn } from '@/lib/utils';

export const SubTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <p className={cn('text-text-muted text-sm tracking-wider sm:text-base', className)}>{children}</p>;
};
