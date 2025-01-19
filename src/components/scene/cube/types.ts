export type IntersectedFaces = {
  top: boolean;
  left: boolean;
  right: boolean;
};
export type Face = keyof IntersectedFaces;
