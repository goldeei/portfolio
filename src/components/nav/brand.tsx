import { Logo } from '@/assets/icons';

import { Button } from '../button';

export const Brand = () => {
  return (
    <div className="relative flex size-fit items-center justify-center">
      <Button
        variant="link"
        className="z-10 size-16 border-none p-0 shadow-inner transition-transform hover:-translate-y-0.5 [&_svg]:size-full"
      >
        <Logo />
      </Button>
    </div>
  );
};
