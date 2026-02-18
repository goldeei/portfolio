import { FileUser } from 'lucide-react';
import { ComponentProps } from 'react';
import { Button } from './ui/button';

export const ResumeTrigger = ({ className, ...props }: ComponentProps<typeof Button>) => {
  return (
    <Button variant="outline" className={className} {...props}>
      <FileUser />
      View Full Resume
    </Button>
  );
};
