import { useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import { BufferGeometry, ExtrudeGeometry, Shape, ShapeGeometry } from 'three';
import { SVGLoader } from 'three/examples/jsm/Addons.js';

export const useSvgAsExtrudeGeometry = (
  svgUrl: string,
  depth: number,
  toShapes: boolean,
): ExtrudeGeometry => {
  const data = useLoader(SVGLoader, svgUrl);

  const geometry = useMemo(() => {
    const shapes = data.paths.flatMap((path) => path.toShapes(toShapes));
    const geometry = new ExtrudeGeometry(shapes, {
      steps: 2,
      depth,
    });

    geometry.center();
    geometry.scale(0.1, 0.1, 0.1);
    return geometry;
  }, [data.paths, depth, toShapes]);

  return geometry;
};
