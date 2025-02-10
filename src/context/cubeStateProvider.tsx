'use client';
import { LandingPosition } from '@/types/landingPosition';
import React, { createContext, use, useReducer } from 'react';

type Position = { x: number; y: number };

export interface CubeState {
  currentLandingPosition: LandingPosition;
  landingPositions: Record<LandingPosition, DOMRect>;
}

const defaultState: CubeState = {
  currentLandingPosition: LandingPosition.Initial,
  landingPositions: {} as CubeState['landingPositions'],
};

type CubeStateAction =
  | { type: 'SET_POSITION'; payload: LandingPosition }
  | {
      type: 'SET_LANDING_POSITION';
      payload: { name: LandingPosition; position: Position };
    };

const cubeStateReducer = (
  state: CubeState,
  action: CubeStateAction,
): CubeState => {
  switch (action.type) {
    case 'SET_POSITION':
      return { ...state, currentLandingPosition: action.payload };
    case 'SET_LANDING_POSITION':
      return {
        ...state,
        landingPositions: {
          ...state.landingPositions,
          [action.payload.name]: action.payload.position,
        },
      };
    default:
      return state;
  }
};

const CubeStateContext = createContext<
  [CubeState, React.Dispatch<CubeStateAction>]
>([defaultState, () => {}]);

export function CubeStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cubeStateReducer, defaultState);

  return (
    <CubeStateContext value={[state, dispatch]}>{children}</CubeStateContext>
  );
}

export const useCubeState = () => use(CubeStateContext);
