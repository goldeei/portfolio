const getCenter = (coord: number, dimension: number) => coord + dimension / 2;

export const getLandingPosition = (rect: DOMRect) => {
  const { left, top, width, height } = rect;
  const scrollLeft = window.scrollX || document.documentElement.scrollLeft;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calc body offset
  const bodyRect = document.body.getBoundingClientRect();
  const bodyOffsetLeft = bodyRect.left;

  const x = getCenter(left, width) + scrollLeft - bodyOffsetLeft,
    y = getCenter(top, height) + scrollTop;

  return { x, y };
};
