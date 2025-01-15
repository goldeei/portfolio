/**
 * Calculates the Y position for a bottom cube to align its top face with the bottom face of a top cube.
 * This function is specifically designed for use with the Drei `RoundedBox` component.
 *
 * The Drei `RoundedBox` component introduces internal offsets due to its rounded corners,
 * which this function accounts for using an empirical adjustment factor.
 *
 * @param height - The height of the bottom cube.
 * @param boxHeight - The height of the top cube (RoundedBox).
 * @returns The Y position for the bottom cube.
 */
export const getRoundedBoxFloorY = (height: number, boxHeight: number) =>
  (-boxHeight + 2 * 0.065) / 2 - height;
