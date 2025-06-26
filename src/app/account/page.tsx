'use client'
import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
} from '@mui/material';
import { withAuth } from '@/hoc/withAuth';

const Account = () => {
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
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Container maxWidth="sm">
                <Stack spacing={2} textAlign="center">
                    <Typography variant="h5" component="h1" fontWeight="bold" color="text.primary">
                        👤 Личный кабинет в разработке
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Здесь будет отображаться информация вашего профиля. Скоро!
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default withAuth(Account);