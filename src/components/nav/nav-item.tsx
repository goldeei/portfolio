import { getScrollContainer } from '@/lib/scroll-utils';
import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { NavItemProps } from './types';

const navItemVariants = cva('p-0 w-full justify-start text-lg', {
  variants: {
    layout: {
      desktop: 'ps-6',
      mobile: 'ps-4 h-4',
    },
    active: {
      true: '',
      false: '',
    },
  },
  compoundVariants: [
    {
      layout: 'desktop',
      active: true,
      className: 'scale-110',
    },
  ],
});

const activeIndicatorVariants = cva('bg-secondary h-full absolute top-1/2 w-1 -translate-y-1/2 ', {
  variants: {
    layout: {
      desktop: 'rounded -left-[3px] ',
      mobile: 'rounded-full ',
    },
  },
});

export const NavItem = ({
  label,
  href,
  id,
  isActive,
  variant,
  onClick,
}: NavItemProps & { isActive: boolean; onClick: () => void; variant?: 'desktop' | 'mobile' }) => {
  const scrollToSection = () => {
    const sectionElement = document.getElementById(id);
    if (!sectionElement) return;

    const isMobile = variant === 'mobile';
    const scrollContainer = getScrollContainer(isMobile);
    if (!scrollContainer) return;

    const containerTop = scrollContainer.getBoundingClientRect().top;
    const sectionTop = sectionElement.getBoundingClientRect().top;
    const targetScroll = scrollContainer.scrollTop + (sectionTop - containerTop);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollContainer.scrollTo({
      top: targetScroll,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    // Move focus to target section so screen readers announce the new location
    if (typeof sectionElement.focus === 'function') {
      sectionElement.setAttribute('tabindex', '-1');
      sectionElement.focus({ preventScroll: true });
    }

    onClick();
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSection();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    // Links activate on Enter by default; add Space for consistency with button behavior
    if (e.key === ' ') {
      e.preventDefault();
      scrollToSection();
    }
  };

  return (
    <li className="relative">
      {isActive && (
        <motion.div
          layoutId={`side-nav-item-active-indicator-${variant || 'desktop'}`}
          initial={false}
          className={cn(activeIndicatorVariants({ layout: variant }))}
        />
      )}
      <Button variant="nav" className={cn(navItemVariants({ layout: variant, active: isActive }))} asChild>
        <a
          href={href}
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-current={isActive ? 'location' : undefined}
          aria-label={label ? `Go to ${label} section` : undefined}
        >
          {label}
        </a>
      </Button>
    </li>
  );
};
