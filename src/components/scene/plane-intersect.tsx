import { ShapeProps } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, PlaneGeometry, Raycaster } from "three";

type Size = [number, number, number?, number?];

type PlaneIntersectProps = ShapeProps<PlaneGeometry> & {
  name: string;
  size: Size;
  onIntersectChange: (name: string, isIntersected: boolean) => void;
};

/**
 * A plane that will return its name and a boolean if it is/is not intersected by the cursor
 *
 * @param PlaneIntersectProps
 * @returns
 */
export const PlaneIntersect = ({ ...props }: PlaneIntersectProps) => {
  const { name, rotation, position, size, onIntersectChange } = props;

  const ref = useRef<Mesh>(null!);

  const { camera, pointer } = useThree();
  const raycaster = new Raycaster();
  useFrame(() => {
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObject(ref.current);

    return intersects.length > 0
      ? onIntersectChange(name, true)
      : onIntersectChange(name, false);
  });

  return (
    <mesh name={name} position={position} rotation={rotation} ref={ref}>
      <planeGeometry args={size} />
      <meshBasicMaterial color={'white'} wireframe />
    </mesh>
  );
};
