'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import "../styles/globals.css"

const SideBar = dynamic(() => import('@/components/ui/SideBar/SideBar'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const Contacts = dynamic(() => import('@/components/ui/Contacts/Contacts'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

const WorkSpace = dynamic(() => import('@/components/ui/WorkSpace/WorkSpace'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export default function Home() {
  const currentPath = usePathname();

  return (
    <Box sx={{ display: "flex", gap: "20px" }}>
      <SideBar currentPath={currentPath} />
      <Contacts />
      <WorkSpace />
    </Box>
  );
}