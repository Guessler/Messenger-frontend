'use client';

import React from 'react';
import Contacts from '@/components/ui/Contacts/Contacts';
import { Box } from '@mui/material';
import { withAuth } from '@/hoc/withAuth';
import CreateNewWorkspace from '../../components/ui/CreateNewWorkspace';
import { useAppSelector } from '@/hooks/redux';
import EmptyWorkspace from '@/components/ui/WorkSpace/EmptyWorkspace';
import WorkSpace from '@/components/ui/WorkSpace/[id]';

function ChatsPage() {
    const selectedWorkspaceId = useAppSelector((state) => state.workspace.selectedWorkspaceId);

    return (
        <Box sx={{ display: 'flex', gap: '20px' }}>
            <Contacts />
            {selectedWorkspaceId ? <WorkSpace /> : <EmptyWorkspace />}
            <CreateNewWorkspace onCreate={() => { }} />
        </Box>
    );
}

export default withAuth(ChatsPage);