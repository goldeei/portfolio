import { Plane } from '@react-three/drei';
import { AdditiveBlending } from 'three';

import { DEFAULT_FLOOR_PROPS } from './constants';

export const Floor = () => {
  return (
    <Plane {...DEFAULT_FLOOR_PROPS} receiveShadow renderOrder={0}>
      <shadowMaterial blending={AdditiveBlending} opacity={0.35} />
    </Plane>
  );
};
