import { getRoundedBoxMaxY } from "@/lib/3d-utils";
import { hslVarToHex } from "@/lib/utils";
import { Box } from "@react-three/drei";

import { DEFAULT_CUBE_PROPS } from "./constants";

const thickness = 0.15;
const y = getRoundedBoxMaxY(DEFAULT_CUBE_PROPS.size[1], 'bottom', thickness);

export const Floor = () => {
  return (
    <Box args={[3, thickness, 3]} position={[0, y, 0]} receiveShadow>
      <meshStandardMaterial
        roughness={1}
        metalness={0}
        color={hslVarToHex('--accent')}
      />
    </Box>
  );
};
