import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';
import { useMemo } from 'react';

type PositionToGet = {
  name: LandingPosition;
  offsetX?: number;
  offsetY?: number;
};

const getPos = (coord: number, dimension: number, offset: number = 0) =>
  coord - dimension / 2 + offset;

const getCenter = (
  { x, y }: { x: number; y: number },
  width: number,
  height: number,
  offsetX?: number,
  offsetY?: number,
) => {
  return {
    left: getPos(x, width, offsetX),
    top: getPos(y, height, offsetY),
  };
};

/**
 * Custom hook to calculate the landing positions of elements within a container.
 *
 * This hook takes a container element, an array of positions to get, and optional offsets.
 * It uses the `useCubeState` hook to access the current state, including the landing positions.
 * The positions are memoized to avoid unnecessary recalculations, and the container's dimensions
 * are memoized to avoid frequent calls to `getBoundingClientRect`.
 *
 * @param containerElement - The HTMLDivElement representing the container in which the elements are positioned.
 * @param positionsToGet - An array of `LandingPosition` enums representing the positions to calculate.
 * @param offsetX - Optional horizontal offset to apply to each position.
 * @param offsetY - Optional vertical offset to apply to each position.
 *
 * @returns An array of objects representing the calculated positions, each with `left` and `top` properties.
 */
export const useLandingPositions = (
  containerElement: HTMLDivElement | null,
  positionsToGet: PositionToGet[],
) => {
  const [cubeState] = useCubeState();

  const { landingPositions } = cubeState;
  const positions = useMemo(() => {
    if (!containerElement || !landingPositions) return [];

    const { width, height } = containerElement.getBoundingClientRect();
    return positionsToGet
      .map((p) => {
        const { name, offsetX, offsetY } = p;

        return landingPositions[name]
          ? getCenter(landingPositions[name], width, height, offsetX, offsetY)
          : null;
      })
      .filter(Boolean);
  }, [containerElement, landingPositions, positionsToGet]);

  return positions;
};
