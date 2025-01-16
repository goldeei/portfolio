/**
 * Computes the Y position for a cube or face to align its top or bottom with a `Rounded Cube`.
 * This function is designed to work only with a Drei `RoundedBox` component.
 *
 * The Drei `RoundedBox` component introduces internal offsets due to its rounded corners.
 * This function adjusts for these offsets using an empirical adjustment factor.
 *
 * @param boxHeight - The height of the reference cube (RoundedBox).
 * @param side - Specifies whether the y value should align with the 'top' or 'bottom' side.
 * @param height - (Optional) The height of the cube to be aligned. Leave undefined for planes.
 * @returns The Y position for the cube to be aligned.
 */
export const getRoundedBoxMaxY = (
  boxHeight: number,
  side: 'top' | 'bottom',
  height?: number,
) => {
  const isTop = side === 'top';

  const h = height ? height : 0;
  const offset = isTop ? 0 : 0.065;

  const maxY = (-boxHeight + 2 * offset) / 2 - h;

  return isTop ? -maxY : maxY;
};
