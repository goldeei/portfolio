import { useSvgAsExtrudeGeometry } from '@/hooks/useSvgAsExtrudeGeometry';
import { hslVarToHex } from '@/lib/style-utils';
import { R3fMesh } from '@/types/three';
import { degToRad } from 'three/src/math/MathUtils.js';

const logoPathBase = '/cube-menu-icons/logo';

type LogoPart = {
  path: string;
} & R3fMesh;
const logoParts: Record<string, LogoPart> = {
  left: {
    path: `${logoPathBase}/left.svg`,
    rotation: [degToRad(180), degToRad(90), degToRad(0)],
    position: [-0.5, 0, 0],
    scale: 0.08,
  },
  top: {
    path: `${logoPathBase}/top.svg`,
    rotation: [degToRad(90), degToRad(0), degToRad(45)],
    position: [0, 0.5, 0],
    scale: 0.11,
  },
  right: {
    path: `${logoPathBase}/right.svg`,
    rotation: [degToRad(0), degToRad(180), degToRad(180)],
    position: [0, 0, 0.5],
    scale: 0.08,
  },
};

const geometry = () => {
  return Object.entries(logoParts).map(([k, v]) => {
    const { path, ...rest } = v;
    const geo = useSvgAsExtrudeGeometry(path, 6, true);

    return (
      <mesh key={k} geometry={geo} {...rest} castShadow>
        <meshStandardMaterial
          roughness={1}
          metalness={1}
          color={hslVarToHex('--color-primary')}
        />
      </mesh>
    );
  });
};

export const LogoMesh = () => {
  return <group>{geometry().map((geo) => geo)}</group>;
};
