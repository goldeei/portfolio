'use client';

import { Scene } from '@/components/scene';
import { useCubeState } from '@/context/cubeStateProvider';
import { LandingPosition } from '@/types/landingPosition';
import { useEffect } from 'react';

import Landing from './(landing)/page';

export default function Home() {
  const [cubeState, setCubeState] = useCubeState();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setCubeState({
  //       type: 'SET_POSITION',
  //       payload: LandingPosition.Introduction,
  //     });
  //   }, 1000);

  //   return () => clearTimeout(timeout);
  // }, [setCubeState]);

  return (
    <main>
      <Landing />
      {Object.keys(cubeState.landingPositions).length > 0 && <Scene />}
    </main>
  );
}
