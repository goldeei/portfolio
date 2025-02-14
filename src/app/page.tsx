'use client';

import { Scene } from '@/components/scene';
import { useCubeState } from '@/context/cubeStateProvider';

import Landing from './landing/page';

export default function Home() {
  const [cubeState] = useCubeState();
  return (
    <main>
      <Landing />
      {Object.keys(cubeState.landingPositions).length > 0 && <Scene />}
    </main>
  );
}
