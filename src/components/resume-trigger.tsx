import { cn } from '@/lib/utils';
import { FileUser } from 'lucide-react';
import { ComponentProps } from 'react';
import { Button } from './ui/button';

export const ResumeTrigger = ({ className, ref, ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button ref={ref} variant="outline" className={cn('flex items-center gap-2', className)} {...props}>
      <FileUser />
      View Full Resume
    </Button>
  );
};
