'use client';
import React, { createContext, use, useReducer } from 'react';

type Position = { x: number; y: number };

export interface CubeState {
  currentLandingPosition: string;
  landingPositions: Record<string, DOMRect> | object;
}

const defaultState: CubeState = {
  currentLandingPosition: 'introduction',
  landingPositions: {},
};

type CubeStateAction =
  | { type: 'SET_POSITION'; payload: string }
  | {
      type: 'SET_LANDING_POSITION';
      payload: { name: string; position: Position };
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
