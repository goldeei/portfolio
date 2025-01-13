import { animated } from "@react-spring/three";
import { ThreeElements } from "@react-three/fiber";

declare global {
  namespace JSX {
    // Extends to resolve some three types not being included in spring's WithAnimated
    // Might only be needed because using React 19, should be removed when packages are updated
    interface IntrinsicElements extends ThreeElements {
      "animated.mesh": ReturnType<typeof animated>;
      "animated.boxGeometry": ReturnType<typeof animated>;
      "animated.meshStandardMaterial": ReturnType<typeof animated>;
    }
  }
}
