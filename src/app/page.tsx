"use client";
import { Button } from "@/components/button";
import { hslVarToHex } from "@/lib/utils";
import {
	DownloadSolid,
	LayersThreeSolid,
	MoonSolid,
} from "@mynaui/icons-react";
import { Environment, RoundedBox } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { cx } from "class-variance-authority";
import { Raleway } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { degToRad } from "three/src/math/MathUtils.js";

const raleway = Raleway({ subsets: ["latin"] });

export default function Home() {
	const [cubeColor, setCubeColor] = useState(hslVarToHex("--primary"));
	const cubeRef = useRef<Mesh>(null);
	useEffect(() => {
		setCubeColor(hslVarToHex("--primary"));
	}, []);

	return (
		<div className={cx("flex flex-col h-dvh px-36 py-8", raleway.className)}>
			<nav className="flex gap-3 justify-end">
				<Button variant="link">Tech I Use</Button>
				<Button variant="link">Experiences</Button>
				<Button variant="link">Projects</Button>
				<Button icon={<DownloadSolid />}>Resume</Button>
				<Button icon={<MoonSolid />} size="icon" />
				<Button icon={<LayersThreeSolid />} size="icon" />
			</nav>
			<main className="flex-1 place-content-center text-center flex flex-col items-center justify-center">
				<div className="text-primary">Test Theme Primary</div>
				<div className="text-secondary">Test Theme Secondary</div>
				<Canvas className="h-14 w-14">
					<Environment preset="studio" />
					<RoundedBox
						ref={cubeRef}
						args={[1, 1, 1]} // Width, height, depth. Default is [1, 1, 1]
						radius={0.05} // Radius of the rounded corners. Default is 0.05
						smoothness={4} // The number of curve segments. Default is 4
						bevelSegments={4} // The number of bevel segments. Default is 4, setting it to 0 removes the bevel, as a result the texture is applied to the whole geometry.
						creaseAngle={0.4} // All THREE.Mesh props are valid
						rotation={[degToRad(11.25), degToRad(45), 0]}
					>
						<meshStandardMaterial
							color={cubeColor}
							roughness={0.5}
							metalness={0.5}
						/>
					</RoundedBox>
					{/* <OrbitControls  /> */}
				</Canvas>
			</main>
		</div>
	);
}
