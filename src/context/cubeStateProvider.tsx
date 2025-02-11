'use client';
import { LandingPosition } from '@/types/landingPosition';
import React, { createContext, use, useEffect, useReducer } from 'react';

type Position = { x: number; y: number };
type AnimationState = 'idle' | 'falling';

export interface CubeState {
  currentLandingPosition: LandingPosition;
  landingPositions: Record<LandingPosition, DOMRect>;
  animationState: AnimationState;
}

const defaultState: CubeState = {
  currentLandingPosition: LandingPosition.Introduction,
  landingPositions: {} as CubeState['landingPositions'],
  animationState: 'idle',
};

type CubeStateAction =
  | { type: 'SET_POSITION'; payload: LandingPosition }
  | {
      type: 'SET_LANDING_POSITION';
      payload: { name: LandingPosition; position: Position };
    }
  | { type: 'SET_ANIMATION_STATE'; payload: AnimationState };

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
    case 'SET_ANIMATION_STATE': {
      return {
        ...state,
        animationState: action.payload,
      };
    }
    default:
      return state;
  }
};

const CubeStateContext = createContext<
  [CubeState, React.Dispatch<CubeStateAction>]
>([defaultState, () => {}]);

export function CubeStateProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cubeStateReducer, defaultState);
  useEffect(() => {
    console.log(state.animationState);
  }, [state.animationState]);
  return (
    <CubeStateContext value={[state, dispatch]}>{children}</CubeStateContext>
  );
}

export const useCubeState = () => use(CubeStateContext);
