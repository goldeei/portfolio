import { Logo } from '@/assets/icons';

import { cn } from '@/lib/style-utils';
import { Button } from '../button';

interface BrandProps {
  className?: string;
}
export const Brand = ({ ...props }: BrandProps) => {
  const { className } = props;

  return (
    <div
      className={cn(
        'relative flex size-16 items-center justify-center',
        className,
      )}
    >
      <Button
        variant="link"
        className="z-10 size-full border-none p-0 inset-shadow-sm transition-transform hover:-translate-y-0.5 [&_svg]:size-full"
      >
        <Logo />
      </Button>
    </div>
  );
};
