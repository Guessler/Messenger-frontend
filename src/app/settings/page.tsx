'use client'

import React from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
    Button,
} from '@mui/material';
import { getUserFromToken } from '@/utils/auth.utils';
import { withAuth } from '@/hoc/withAuth';

function Settings() {
    const user = getUserFromToken();

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
    };

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
                        ⚙️ Настройки
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        Здесь будет настройка профиля, уведомлений и безопасности.
                    </Typography>

                    {user ? (
                        <>
                            <Typography variant="subtitle1" fontWeight="medium" color="text.primary">
                                Ваш email: <strong>{user.email}</strong>
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="medium" color="text.primary">
                                Ваше имя: <strong>{user.name}</strong>
                            </Typography>
                        </>
                    ) : (
                        <Typography color="error">Вы не авторизованы</Typography>
                    )}

                    <Button
                        variant="contained"
                        color="error"
                        sx={{ mt: 2, alignSelf: 'center', width: '200px' }}
                        onClick={handleLogout}
                    >
                        Выйти из аккаунта
                    </Button>

                </Stack>
            </Container>
        </Box>
    );
}

export default withAuth(Settings)