import { Button } from "@/components/button";
import {
	DownloadSolid,
	LayersThreeSolid,
	MoonSolid,
} from "@mynaui/icons-react";

export default function Home() {
	return (
		<div className="flex flex-col h-dvh px-36 py-8">
			<nav className="flex gap-3 justify-end">
				<Button variant="link">Tech I Use</Button>
				<Button variant="link">Experiences</Button>
				<Button variant="link">Projects</Button>
				<Button icon={<DownloadSolid />}>Resume</Button>
				<Button icon={<MoonSolid />} />
				<Button icon={<LayersThreeSolid />} />
			</nav>
			<main className="flex-1 place-content-center text-center flex flex-col items-center justify-center">
				<div className="text-primary">Test Theme Primary</div>
				<div className="text-secondary">Test Theme Secondary</div>
			</main>
		</div>
	);
}
