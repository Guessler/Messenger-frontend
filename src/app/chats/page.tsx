import React from 'react';
import Contacts from '@/components/ui/Contacts/Contacts';
import WorkSpace from '@/components/ui/WorkSpace/WorkSpace';
import { Box } from '@mui/material';

export default function ChatsPage() {
    return (
        <Box sx={{ display: "flex", gap: "20px" }}>
            <Contacts/>
            <WorkSpace/>
        </Box>
    );
}