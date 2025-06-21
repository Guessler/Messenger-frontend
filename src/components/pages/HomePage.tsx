'use client';

import dynamic from 'next/dynamic';

const SideBar = dynamic(() => import('../ui/SideBar/SideBar'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function HomePage() {
  return (
    <>
      <SideBar />
    </>
  );
}