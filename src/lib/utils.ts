import { ClassValue, clsx } from "clsx";
import convert from "color-convert";
import { HSL } from "color-convert/conversions";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge class names using clsx and tailwind-merge.
 * @param {...ClassValue[]} inputs - The class names to merge.
 * @returns {string} - The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Converts the stored shadcn theme css color variables to a hex value.
 * @param {string} colorVariableName - The name of the CSS variable containing the HSL value.
 * @returns {string} - The hex color string.
 */
export function hslVarToHex(colorVariableName: string): string {
	// Get the raw HSL value from the CSS variable
	const rawHSL = getComputedStyle(document.documentElement)
		.getPropertyValue(colorVariableName)
		.trim();

	// Convert the raw HSL string to an array of numbers
	const hslValueArray = rawHSL
		.replaceAll("%", "")
		.split(" ")
		.map((v) => Number(v)) as HSL;

	// Convert and return the HSL array to a hex color string
	return convert.hsl.hex(hslValueArray);
}
