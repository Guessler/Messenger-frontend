'use client';

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
} from '@mui/material';

export default function EmptyWorkspace() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '96vh',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                padding: { xs: '16px', sm: '20px' },
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Container maxWidth="sm">
                    <Stack spacing={2} textAlign="center">
                        <Typography variant="h5" component="h1" fontWeight="bold" color="text.primary">
                            💬 Чат не выбран
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Выберите чат из списка слева, чтобы начать переписку.
                        </Typography>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}