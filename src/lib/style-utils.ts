import { ClassValue, clsx } from 'clsx';
import convert from 'color-convert';
import { HSL } from 'color-convert/conversions';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to merge class names using clsx and tailwind-merge.
 *
 * This function takes multiple class names as input and merges them into a single string.
 *
 * @param inputs - The class names to merge.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const getCSSVar = (varName: string) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trimEnd();

/**
 * Converts the stored shadcn theme CSS color variables to a hex value.
 *
 * This function retrieves the HSL value from a CSS variable and converts it to a hex color string.
 *
 * @param colorVariableName - The name of the CSS variable containing the HSL value.
 * @returns The hex color string.
 */
export function hslVarToHex(
  colorVariableName: string,
  isHslValue: boolean = true,
): string {
  // Get the raw HSL value from the CSS variable
  const rawHSL = getCSSVar(colorVariableName);

  // Convert the raw HSL string to an array of numbers
  const hslValueArray = rawHSL
    .replace(/[^\d\s]/g, '')
    .split(' ')
    .map((v) => Number(v)) as HSL;

  // Convert and return the HSL array to a hex color string
  return `#${convert.hsl.hex(hslValueArray)}`;
}
