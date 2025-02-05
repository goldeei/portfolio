import { degToRad } from "three/src/math/MathUtils.js";

import { DEFAULT_SUBJECT_ROTATION } from "../scene/constants";
import { Diamond } from "./diamond";

export const LandingSpot = () => {
  return (
    <div className="relative h-1 w-full rounded bg-accent shadow-inner">
      <div className="absolute right-24 top-1/2 -translate-y-1/2">
        <Diamond
          className="size-36 bg-accent shadow-inner"
          style={{
            transform: `rotateX(${degToRad(90) - DEFAULT_SUBJECT_ROTATION.x}rad)`,
          }}
        />
      </div>
    </div>
  );
};
