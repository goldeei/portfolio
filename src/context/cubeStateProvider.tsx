'use client';
import { getElementCenterPosition } from '@/lib/getElementCenterPosition';
import { getCSSVar } from '@/lib/style-utils';
import { LandingPosition } from '@/types/landingPosition';
import React, { createContext, use, useEffect, useReducer } from 'react';

type Position = { x: number; y: number };
type AnimationState = 'idle' | 'falling';

export interface CubeState {
  currentLandingPosition: LandingPosition;
  landingPositions: Record<LandingPosition, Position>;
  cubePositions: Record<LandingPosition, Position>;
  animationState: AnimationState;
}

const defaultState: CubeState = {
  currentLandingPosition: LandingPosition.Initial,
  landingPositions: {} as CubeState['landingPositions'],
  cubePositions: {} as CubeState['cubePositions'],
  animationState: 'idle',
};

type CubeStateAction =
  | { type: 'SET_POSITION'; payload: LandingPosition }
  | {
      type: 'SET_LANDING_POSITION';
      payload: { name: LandingPosition; position: Position };
    }
  | { type: 'SET_ANIMATION_STATE'; payload: AnimationState }
  | {
      type: 'SET_CANVAS_POSITION';
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
    case 'SET_CANVAS_POSITION':
      const canvasSize = Number(getCSSVar('--canvas-size').replace('px', ''));
      const pos = getElementCenterPosition(
        { ...action.payload.position },
        canvasSize,
        canvasSize,
      );

      return {
        ...state,
        cubePositions: {
          ...state.cubePositions,
          [action.payload.name]: pos,
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
    Object.entries(state.landingPositions).forEach(([key, position]) =>
      dispatch({
        type: 'SET_CANVAS_POSITION',
        payload: { name: key as LandingPosition, position },
      }),
    );
  }, [state.landingPositions]);

  return (
    <CubeStateContext value={[state, dispatch]}>{children}</CubeStateContext>
  );
}

export const useCubeState = () => use(CubeStateContext);
