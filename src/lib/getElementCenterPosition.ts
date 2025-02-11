const getPos = (coord: number, dimension: number, offset: number = 0) =>
  coord - dimension / 2 + offset;

export const getElementCenterPosition = (
  { x, y }: { x: number; y: number },
  width: number,
  height: number,
  offsetX?: number,
  offsetY?: number,
) => {
  return {
    x: getPos(x, width, offsetX),
    y: getPos(y, height, offsetY),
  };
};
