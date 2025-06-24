'use client';

import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';

const SideBar = dynamic(() => import('@/components/ui/SideBar/SideBar'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const hideSidebarPaths = ['/register', '/login'];

    const showSidebar = !hideSidebarPaths.includes(pathname);

    return (
        <Box sx={{ display: 'flex', gap: "20px" }}>
            {showSidebar && <SideBar />}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
}