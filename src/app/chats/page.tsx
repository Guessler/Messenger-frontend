'use client';

import React from 'react';
import Contacts from '@/components/ui/Contacts/Contacts';
import WorkSpace from '@/components/ui/Contacts/[id]';
import { Box } from '@mui/material';
import { withAuth } from '@/hoc/withAuth';
import CreateNewWorkspace from "../../components/ui/CreateNewWorkspace"

function ChatsPage() {
    return (
        <Box sx={{ display: "flex", gap: "20px" }}>
            <Contacts />
            <WorkSpace />
            <CreateNewWorkspace onCreate={() => { name: "first-wrkspace"; description: "first-descr" }} />
        </Box>
    );
}

export default withAuth(ChatsPage);