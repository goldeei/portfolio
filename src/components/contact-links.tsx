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
              size="icon"
              className="w-full sm:w-12"
              aria-label={displayText ? `${label}: ${displayText}` : label}
              asChild
            >
              <a href={href.toString()} {...(target && { target })} {...(rel && { rel })}>
                <Icon className="size-5" />
              </a>
            </Button>
          </li>
        );
      })}
    </ul>
  );
};
