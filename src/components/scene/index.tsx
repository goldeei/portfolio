import { GizmoHelper, GizmoViewport, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";

import { Cube } from "./Cube";
import { Environment } from "./Environment";
import { Floor } from "./Floor";

export const Scene = () => {
  return (
    <Canvas orthographic camera={{ zoom: 50, position: [0, 20, 100] }} shadows>
      <Environment />
      <group rotation={[degToRad(15), degToRad(45), 0]} position={[0, 0, 0]}>
        <Cube />
        <Floor />
      </group>
      <OrbitControls />
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
    </Canvas>
  );
};
