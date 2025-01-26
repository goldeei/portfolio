import { INTERSECT_OPTION, SIDES } from './constants';

export type Side = (typeof SIDES)[number];
export type IntersectOption = (typeof INTERSECT_OPTION)[number];

export type SideObject<T> = {
  [K in IntersectOption]: T;
};

export type IntersectedFaces = SideObject<boolean>;
