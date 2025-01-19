import { useR3fState } from '@/context/r3fProvider';
import { GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { OrbitControls as ThreeOrbitControls } from 'three/examples/jsm/Addons.js';

import { Cube } from './cube';
import { Environment } from './environment';
import { Floor } from './floor';

export const Scene = () => {
  const [state] = useR3fState();

  const orbitControlsRef = useRef(null);

  useEffect(() => {
    if (orbitControlsRef.current && !state.isOrbitControlEnabled) {
      (orbitControlsRef.current as ThreeOrbitControls).reset();
    }
  }, [state.isOrbitControlEnabled]);

  return (
    <Canvas orthographic camera={{ zoom: 50, position: [0, 0, 100] }} shadows>
      <Environment />
      <Cube />
      <Floor />
      {state.isOrbitControlEnabled && <OrbitControls ref={orbitControlsRef} />}
      <GizmoHelper
        alignment="bottom-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport
          axisColors={['red', 'green', 'blue']}
          labelColor="black"
        />
      </GizmoHelper>
    </Canvas>
  );
};
