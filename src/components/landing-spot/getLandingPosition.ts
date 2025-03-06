const getCenter = (coord: number, dimension: number) => coord + dimension / 2;

export const getLandingPosition = (rect: DOMRect) => {
  const { left, top, width, height } = rect;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  const x = getCenter(left, width) + scrollLeft,
    y = getCenter(top, height) + scrollTop;

  return { x, y };
};
