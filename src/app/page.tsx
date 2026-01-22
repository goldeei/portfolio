import { Header, HomePage } from '@/components';
import { SideNav } from '@/components/side-nav';

export default function Home() {
  return (
    <>
      <Header />
      <main>

        <div className="block sm:flex sm:items-center max-w-7xl mx-auto px-4 sm:pt-(--header-height) gap-8" style={{ height: 'calc(100dvh - var(--header-height))' }}>
          <aside className='hidden sm:block'>
            <SideNav />
          </aside> 
          <HomePage className='sm:hidden' />
          <div >
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
            <div>
              Place holder page with stuff and things Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi sit, dolor officia pariatur, nisi eaque praesentium mollitia, dolorum quisquam harum iste quasi! Distinctio cupiditate beatae id provident totam eos excepturi.
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
