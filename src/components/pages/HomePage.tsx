'use client';

import dynamic from 'next/dynamic';
import Contacts from "../../components/ui/Contacts/Contacts"
import { Box } from '@mui/material';
import WorkSpace from '../ui/WorkSpace/WorkSpace';

const SideBar = dynamic(() => import('../ui/SideBar/SideBar'), {
    ssr: false,
    loading: () => <div>Loading...</div>
});

export default function HomePage() {
    return (
        <Box sx={{display: "flex", gap: "20px"}}>
            <SideBar />
            <Contacts/>
            <WorkSpace/>
        </Box>
    );
}