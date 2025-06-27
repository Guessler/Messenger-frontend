'use client';

import React from 'react';
import {
    Box,
    Typography,
    Avatar,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
} from '@mui/material';

const fakeData = {
    name: 'TL',
    lastActive: 'Сегодня',
};

export default function WorkSpace() {
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
                    primary={
                        <Typography noWrap component="div">
                            {fakeData.name}
                        </Typography>
                    }
                    secondary={
                        <Typography noWrap component="span">
                            {fakeData.lastActive}
                        </Typography>
                    }
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