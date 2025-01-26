import { hslVarToHex } from '@/lib/utils';
import { Box } from '@react-three/drei';

import { DEFAULT_FLOOR_PROPS } from './constants';

export const Floor = () => {
  return (
    <Box {...DEFAULT_FLOOR_PROPS} receiveShadow>
      <meshStandardMaterial
        roughness={1}
        metalness={0}
        color={hslVarToHex('--accent')}
      />
    </Box>
  );
};
