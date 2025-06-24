'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';


// Динамический импорт компонентов с отключенным SSR
const SideBar = dynamic(() => import('../ui/SideBar/SideBar'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

const Contacts = dynamic(() => import('../ui/Contacts/Contacts'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

const WorkSpace = dynamic(() => import('../ui/WorkSpace/WorkSpace'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export default function HomePage() {
    return (
        <Box sx={{ display: "flex", gap: "20px" }}>
            {/* <SideBar /> */}
            <Contacts />
            <WorkSpace />
        </Box>
    );
}