import tailwindConfig from '../tailwind.config';

// Screen breakpoints from Tailwind config
const screens = tailwindConfig.theme.extend.screens;

type BreakpointValues = {
  [K in keyof typeof screens]: number;
};

/**
 * Breakpoint values as numbers (without 'px' units).
 * Uses the same keys as defined in the tailwind.config.js
 */
export const BREAKPOINT: BreakpointValues = Object.entries(
  tailwindConfig.theme.extend.screens,
).reduce<BreakpointValues>(
  (acc, [key, value]) => ({
    ...acc,
    // Convert string values (e.g., '768px') to numbers (e.g., 768)
    [key]: parseInt(value.replace('px', ''), 10),
  }),
  {} as BreakpointValues,
);
