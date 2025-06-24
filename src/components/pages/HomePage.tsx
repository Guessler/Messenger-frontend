'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

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
                <Contacts />
                <WorkSpace />
            </Box>
    );
}