import { useLoader } from '@react-three/fiber';
import { useMemo } from 'react';
import { ExtrudeGeometry, Shape } from 'three';
import { SVGLoader } from 'three/examples/jsm/Addons.js';

export const useSvgAsExtrudeGeometry = (
  svgUrl: string,
  depth: number,
): ExtrudeGeometry => {
  const data = useLoader(SVGLoader, svgUrl);

  const geometry = useMemo(() => {
    const shapes: Shape[] = [];
    data.paths.forEach((p) => {
      p.toShapes(false).forEach((sp) => {
        shapes.push(sp);
      });
    });

    const geo = new ExtrudeGeometry(shapes, {
      steps: 4,
      depth: depth * 2,
      bevelEnabled: true,
      // bevelThickness: 0.25,
      // bevelSize: 1,
      // bevelOffset: 0,
      // bevelSegments: 2,
    });

    geo.center();
    geo.scale(0.1, 0.1, 0.1);
    return geo;
  }, [data.paths, depth]);

  return geometry;
};
