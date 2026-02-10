import { CONTACT_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

export const ContactLinks = ({ className }: { className?: string }) => {
  return (
    <ul role="list" aria-label="Contact links" className={cn('flex gap-2 px-2 sm:gap-4', className)}>
      {CONTACT_LINKS.map(({ icon: Icon, label, displayText, href, target, rel }) => {
        return (
          <li key={label} className="flex flex-1 items-center">
            <Button
              type="anchor"
              href={href.toString()}
              size="icon"
              variant="interactive"
              className="w-full sm:w-12"
              aria-label={displayText ? `${label}: ${displayText}` : label}
              {...(target && { target })}
              {...(rel && { rel })}
            >
              <Icon className="size-5" />
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
