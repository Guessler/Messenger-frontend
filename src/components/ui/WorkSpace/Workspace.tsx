'use client';

import React from 'react';
import { useAppSelector } from '@/hooks/redux';
import {
    Box,
    Avatar,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
} from '@mui/material';

export default function WorkSpace() {
    const selectedContact = useAppSelector((state) => state.workspace.selectedContact);

    if (!selectedContact) {
        return (
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography color="text.secondary">Контакт не выбран</Typography>
            </Box>
        );
    }

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '96vh',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <ListItemButton
                sx={{
                    width: '100%',
                    height: '50px',
                    padding: 0,
                    maxHeight: '50px',
                }}
            >
                <ListItemAvatar>
                    <Avatar />
                </ListItemAvatar>
                <ListItemText
                    primary={selectedContact.name}
                    secondary={selectedContact.message}
                    primaryTypographyProps={{ noWrap: true }}
                    secondaryTypographyProps={{ noWrap: true }}
                />
            </ListItemButton>

            <Box
                sx={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: '#F6F6F6',
                    borderRadius: '12px',
                    mt: 2,
                    p: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography color="text.secondary">Начните общение</Typography>
            </Box>
        </Box>
    );
}