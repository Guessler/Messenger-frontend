'use client';
import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Paper,
    Button,
    Chip,
} from '@mui/material';
import { withAuth } from '@/hoc/withAuth';
import {
    Edit as EditIcon,
    Notifications as NotificationsIcon,
    Security as SecurityIcon,
    History as HistoryIcon,
    Logout as LogoutIcon,
    CalendarToday as CalendarIcon,
    AccessTime as LastLoginIcon,
    Language as LanguageIcon,
    Facebook as FacebookIcon,
    Google as GoogleIcon,
} from '@mui/icons-material';
import { getUserFromToken } from '@/utils/auth.utils';

const Account = () => {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
    };

    const handleComingSoon = () => {
        alert('Этот функционал в разработке');
    };

    const user = getUserFromToken();

    console.log('Roles:', user?.roles);

    const activityLog = [
        { id: 1, action: 'Вход сегодня в 14:22', icon: <HistoryIcon color="primary" /> },
        { id: 2, action: 'Выход вчера в 22:30', icon: <HistoryIcon color="secondary" /> },
    ];

    return (
        <Box sx={{
            width: '100%',
            height: '96vh',
            backgroundColor: '#FFFFFF',
        }}>
            <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden', height: '100%' }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    height: '100%'
                }}>
                    <Box sx={{
                        bgcolor: 'primary.main',
                        p: 4,
                        height: { xs: 'auto', md: '100%' },
                        boxSizing: 'border-box',
                        flex: { xs: 'auto', md: '0 0 15%' }, 
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Stack alignItems="center" spacing={2}>
                            <Avatar
                                sx={{
                                    width: 100,
                                    height: 100,
                                    bgcolor: 'background.paper',
                                    color: 'primary.main',
                                    fontSize: '2.5rem',
                                    border: '3px solid white'
                                }}
                            >
                                {user?.name?.charAt(0) || '?'}
                            </Avatar>
                            <Typography variant="h6" color="white" textAlign="center">
                                {user?.name || 'Гость'}
                            </Typography>

                        </Stack>
                    </Box>

                    <Box sx={{
                        p: 4,
                        flex: '1 1 auto'
                    }}>
                        <Stack spacing={4}>
                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Контактная информация
                                </Typography>
                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                    <strong>Email:</strong> {user?.email || 'Не указан'}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="body2" color="text.secondary">
                                        <CalendarIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                                        Дата регистрации
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <LastLoginIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                                        Последний вход
                                    </Typography>
                                </Stack>
                            </Box>
                            <Divider />

                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Язык интерфейса
                                </Typography>
                                <Button
                                    variant="outlined"
                                    startIcon={<LanguageIcon />}
                                    onClick={handleComingSoon}
                                    size="small"
                                >
                                    Русский
                                </Button>
                            </Box>
                            <Divider />

                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Быстрые действия
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={<EditIcon />}
                                        size="small"
                                        onClick={handleComingSoon}
                                        sx={{ flex: { xs: '1 1 calc(100% - 8px)', md: '1 1 48%' } }}
                                    >
                                        Профиль
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={<SecurityIcon />}
                                        size="small"
                                        onClick={handleComingSoon}
                                        sx={{ flex: { xs: '1 1 calc(100% - 8px)', md: '1 1 48%' } }}
                                    >
                                        Безопасность
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        startIcon={<NotificationsIcon />}
                                        size="small"
                                        onClick={handleComingSoon}
                                        sx={{ flex: { xs: '1 1 calc(100% - 8px)', md: '1 1 48%' } }}
                                    >
                                        Уведомления
                                    </Button>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        color="error"
                                        startIcon={<LogoutIcon />}
                                        size="small"
                                        onClick={handleLogout}
                                        sx={{ flex: { xs: '1 1 calc(100% - 8px)', md: '1 1 48%' } }}
                                    >
                                        Выйти
                                    </Button>
                                </Box>
                            </Box>
                            <Divider />

                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Привязанные аккаунты
                                </Typography>
                                <Stack direction="row" spacing={1}>
                                    <Button
                                        variant="outlined"
                                        startIcon={<FacebookIcon />}
                                        size="small"
                                        onClick={handleComingSoon}
                                        fullWidth
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        startIcon={<GoogleIcon />}
                                        size="small"
                                        onClick={handleComingSoon}
                                        fullWidth
                                    >
                                        Google
                                    </Button>
                                </Stack>
                            </Box>
                            <Divider />

                            <Box>
                                <Typography variant="subtitle1" gutterBottom>
                                    Недавняя активность
                                </Typography>
                                <List disablePadding dense>
                                    {activityLog.map((log) => (
                                        <ListItem key={log.id} sx={{ px: 0 }}>
                                            <ListItemAvatar sx={{ minWidth: 36 }}>
                                                {log.icon}
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={log.action}
                                                primaryTypographyProps={{ variant: 'body2' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default withAuth(Account);