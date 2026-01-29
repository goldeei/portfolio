import { Experience, Header, MobileHero } from '@/components';
import { AboutMe } from '@/components/sections/about-me';
import { LetsConnect } from '@/components/sections/lets-connect';
import { SideNav } from '@/components/side-nav';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div
          className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:mt-(--header-height) sm:grid-cols-[300px_auto] sm:gap-24"
          style={{ height: 'calc(100dvh - var(--header-height))' }}
        >
          <SideNav />
          <div className="sm:max-h-svh sm:overflow-y-auto">
            <MobileHero className="sm:hidden" />
            <AboutMe />
            <Experience />
            <LetsConnect />
          </div>
        </div>
      </main>
    </>
  );
}
