import { easings, SpringRef } from "react-spring";

export const jump = (
  api: SpringRef<{ position: number[] }>,
  jumpHeight: number,
  durationUp: number = 300,
  durationDown: number = 200,
) => {
  api.start({
    to: async (next) => {
      await next({
        position: [0, jumpHeight, 0],
        config: { duration: durationUp, easing: easings.easeOutQuad },
      });
      await next({
        position: [0, 0, 0],
        config: { duration: durationDown, easing: easings.easeInQuad },
      });
    },
  });
};
