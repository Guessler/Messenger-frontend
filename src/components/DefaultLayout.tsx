'use client';

import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SideBar = dynamic(() => import('@/components/ui/SideBar/SideBar'), {
    ssr: false,
    loading: () => <div>Loading...</div>,
});

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const hideSidebarPaths = ['/sign-in', '/sign-up'];
    const showSidebar = !hideSidebarPaths.includes(pathname);

    if (!mounted) {
        return null;
    }

    return (
        <Box sx={{ display: 'flex', gap: "20px" }}>
            {showSidebar && <SideBar />}
            <Box component="main" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Box>
    );
}