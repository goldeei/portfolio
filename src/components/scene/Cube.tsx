import { getRoundedBoxMaxY } from "@/lib/3d-utils";
import { hslVarToHex } from "@/lib/utils";
import { animated, useSpring } from "@react-spring/three";
import { RoundedBox } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";

import { jump } from "../../animations/r3f";
import { DEFAULT_CUBE_PROPS } from "./constants";
import { PlaneIntersect } from "./plane-intersect";

type IntersectedFaces = {
  top: boolean;
  left: boolean;
  right: boolean;
};
type Face = keyof IntersectedFaces;

export const Cube = () => {
  const [cubeColor, setCubeColor] = useState(hslVarToHex('--primary'));
  const cubeRef = useRef<THREE.Mesh>(null);

  const [spring, api] = useSpring(() => ({
    position: [0, 0, 0],
  }));
  const handleJump = () => jump(api, 1.5);

  useEffect(() => {
    setCubeColor(hslVarToHex('--primary'));
  }, []);

  const { size, radius } = DEFAULT_CUBE_PROPS;

  const cornerOffset = (size[0] * Math.sqrt(3)) / 3;

  const rotateCubeTowardsFace = (n: Face | undefined) => {
    if (!cubeRef.current) return;
    switch (n) {
      case 'right':
        cubeRef.current.rotation.set(0, degToRad(-35), 0);
        console.log('right');
        break;
      case 'left':
        cubeRef.current.rotation.set(0, degToRad(35), 0);
        console.log('left');
        break;
      case 'top':
        // cubeRef.current.rotation.set(degToRad(90), 0, 0);
        console.log('top');
        break;
      default:
        cubeRef.current.rotation.set(0, 0, 0);
        console.log('none');
        break;
    }
  };

  const [intersectedFace, setIntersectedFace] = useState<IntersectedFaces>({
    top: false,
    left: false,
    right: false,
  });

  const handleIntersect = () => {};

  return (
    <group>
      <group>
        <PlaneIntersect
          name="right"
          onIntersectChange={handleIntersect}
          rotation={[degToRad(0), degToRad(-45), degToRad(0)]}
          size={[size[0], size[1]]}
          position={[cornerOffset / 2, 0, cornerOffset / 2]}
        />
        <PlaneIntersect
          name="left"
          onIntersectChange={handleIntersect}
          rotation={[degToRad(0), degToRad(-45), degToRad(0)]}
          size={[size[0], size[1]]}
          position={[-cornerOffset / 2, 0, -cornerOffset / 2]}
        />
        <PlaneIntersect
          name="top"
          onIntersectChange={handleIntersect}
          rotation={[degToRad(90), degToRad(0), 0]}
          size={[size[0] * 1.25, size[0] * 1.25]}
          position={[0, getRoundedBoxMaxY(size[1], 'top', 0), 0]}
        />
      </group>
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
    </group>
  );
};
