import { Button } from '@/components/button';

export default function Home() {
  return (
    <div>
      <main className="h-svh w-svw place-content-center text-center flex flex-col items-center justify-center">
        <div className="text-primary">Test Theme Primary</div>
        <div className="text-secondary">Test Theme Secondary</div>
        <Button>Button</Button>
      </main>
    </div>
  );
}
