import { hslVarToHex } from "@/lib/utils";
import { animated, useSpring } from "@react-spring/three";
import { RoundedBox } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";

import { jump } from "../../animations/r3f";
import { DEFAULT_CUBE_PROPS } from "./constants";

export const Cube = () => {
  const [cubeColor, setCubeColor] = useState(hslVarToHex("--primary"));
  const cubeRef = useRef<Mesh>(null);

  const [spring, api] = useSpring(() => ({
    position: [0, 0, 0],
  }));
  const handleJump = () => jump(api, 1.5);

  useEffect(() => {
    setCubeColor(hslVarToHex("--primary"));
  }, []);

  const { size, radius } = DEFAULT_CUBE_PROPS;

  return (
    <animated.mesh
      position={spring.position.to((x, y) => [x, y, 0])}
      onClick={handleJump}
    >
      <RoundedBox
        ref={cubeRef}
        args={size}
        radius={radius}
        smoothness={3}
        bevelSegments={6}
        creaseAngle={0.25}
        castShadow
      >
        <meshStandardMaterial
          color={cubeColor}
          roughness={0.5}
          metalness={0.5}
        />
      </RoundedBox>
    </animated.mesh>
  );
};
