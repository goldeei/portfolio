import { createPortal } from 'react-dom';

/**
 * Wrapper for creating a portal to the body element.
 * This is used to render components outside of the main DOM tree.
 * @param children - The children to render.
 * @returns A portal to the body element.
 */
export const BodyPortal = ({ children }: { children: React.ReactNode }) => {
  if (typeof window === 'undefined') return null;
  return createPortal(children, document.body);
};

BodyPortal.displayName = 'BodyPortal';
