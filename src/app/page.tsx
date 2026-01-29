import { Experience, Header } from '@/components';
import { Hero } from '@/components/hero';
import { AboutMe } from '@/components/sections/about-me';
import { LetsConnect } from '@/components/sections/lets-connect';
import { SideNav } from '@/components/side-nav';

export default function Home() {
  return (
    <>
      <Header />
      <div
        className="mt-(--header-height) grid grid-cols-1 sm:grid-cols-[300px_auto] sm:grid-rows-2"
        style={{ height: 'calc(100dvh - var(--header-height))' }}
      >
        <Hero />
        <main className="sm:row-span-2 sm:max-h-svh sm:overflow-y-auto">
          <AboutMe />
          <Experience />
          <LetsConnect />
        </main>
        <SideNav className="hidden sm:col-start-1 sm:row-start-2 sm:block" />
      </div>
    </>
  );
}
