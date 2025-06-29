'use client';

import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Stack,
    Button,
    Divider,
    Paper,
    TextField,
    FormControlLabel,
    Switch,
    Avatar,
    IconButton,
    Collapse,
    Alert,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { getUserFromToken } from '@/utils/auth.utils';
import { withAuth } from '@/hoc/withAuth';
import { Edit, CameraAlt, Check, ExpandMore, ExpandLess } from '@mui/icons-material';

function Settings() {
    const user = getUserFromToken();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState(user?.name || '');
    const [email, setEmail] = useState(user?.email || '');
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        weeklyDigest: false
    });
    const [showPasswordForm, setShowPasswordForm] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
    };

    const handleSaveProfile = () => {
        setEditMode(false);
        setSuccessMessage('Изменения профиля сохранены!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handlePasswordChange = () => {
        setShowPasswordForm(false);
        setSuccessMessage('Пароль успешно изменен!');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    const handleNotificationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNotifications({
            ...notifications,
            [event.target.name]: event.target.checked
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '96vh',
                overflow: 'hidden',
                backgroundColor: '#F9FAFB',
            }}
        >
            <Container 
                maxWidth="md" 
                sx={{
                    height: '100%',
                    width: "100%",
                    overflowY: 'auto',
                    py: 2,
                    px: { xs: 1, sm: 2 },
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: '#ddd',
                        borderRadius: '3px',
                    },
                }}
            >
                {successMessage && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                        {successMessage}
                    </Alert>
                )}
                {errorMessage && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                        {errorMessage}
                    </Alert>
                )}

                <Paper 
                    elevation={3} 
                    sx={{ 
                        p: { xs: 2, sm: 3, md: 4 }, 
                        borderRadius: '12px',
                        mb: 2,
                    }}
                >
                    <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                        <Typography variant="h5" component="h1" fontWeight="bold">
                            ⚙️ Настройки
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" paragraph>
                        Управляйте настройками вашего аккаунта
                    </Typography>

                    <Box 
                        mt={3} 
                        sx={{ 
                            backgroundColor: editMode ? '#f5f5f5' : 'transparent', 
                            p: { xs: 2, sm: 3 }, 
                            borderRadius: 2,
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                                🧑‍💻 Профиль
                            </Typography>
                            {!editMode ? (
                                <Button 
                                    startIcon={<Edit fontSize="small" />} 
                                    variant="outlined" 
                                    size={isMobile ? 'small' : 'medium'}
                                    onClick={() => setEditMode(true)}
                                >
                                    Редактировать
                                </Button>
                            ) : (
                                <Button 
                                    startIcon={<Check fontSize="small" />} 
                                    variant="contained" 
                                    color="primary"
                                    size={isMobile ? 'small' : 'medium'}
                                    onClick={handleSaveProfile}
                                >
                                    Сохранить
                                </Button>
                            )}
                        </Stack>
                        <Divider sx={{ my: 2 }} />
                        
                        {user ? (
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: { xs: 'column', sm: 'row' }, 
                                alignItems: { xs: 'center', sm: 'flex-start' },
                                gap: 3 
                            }}>
                                <Box sx={{ position: 'relative' }}>
                                    <Avatar 
                                        sx={{ 
                                            width: 80, 
                                            height: 80, 
                                            fontSize: 32,
                                            bgcolor: '#4e73df'
                                        }}
                                    >
                                        {user.name.charAt(0)}
                                    </Avatar>
                                    {editMode && (
                                        <IconButton 
                                            size="small"
                                            sx={{ 
                                                position: 'absolute', 
                                                bottom: 0, 
                                                right: 0,
                                                backgroundColor: 'white',
                                                boxShadow: 1,
                                                '&:hover': {
                                                    backgroundColor: '#f0f0f0'
                                                }
                                            }}
                                        >
                                            <CameraAlt fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                                <Box sx={{ flex: 1, width: '100%' }}>
                                    {editMode ? (
                                        <Stack spacing={2}>
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Имя"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <TextField
                                                fullWidth
                                                size="small"
                                                label="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                margin="normal"
                                                variant="outlined"
                                                type="email"
                                            />
                                        </Stack>
                                    ) : (
                                        <Stack spacing={1}>
                                            <Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    Имя
                                                </Typography>
                                                <Typography variant="body1">{user.name}</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    Email
                                                </Typography>
                                                <Typography variant="body1">{user.email}</Typography>
                                            </Box>
                                        </Stack>
                                    )}
                                </Box>
                            </Box>
                        ) : (
                            <Typography color="error">Вы не авторизованы</Typography>
                        )}
                    </Box>

                    {/* <Box 
                        mt={3} 
                        sx={{ 
                            backgroundColor: '#f5f5f5', 
                            p: { xs: 2, sm: 3 }, 
                            borderRadius: 2,
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                            🔔 Уведомления
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        
                        <Stack spacing={1}>
                            <FormControlLabel
                                control={
                                    <Switch 
                                        size="small"
                                        checked={notifications.email} 
                                        onChange={handleNotificationChange}
                                        name="email"
                                        color="primary"
                                    />
                                }
                                label="Email уведомления"
                            />
                            <FormControlLabel
                                control={
                                    <Switch 
                                        size="small"
                                        checked={notifications.push} 
                                        onChange={handleNotificationChange}
                                        name="push"
                                        color="primary"
                                    />
                                }
                                label="Push уведомления"
                            />
                            <FormControlLabel
                                control={
                                    <Switch 
                                        size="small"
                                        checked={notifications.weeklyDigest} 
                                        onChange={handleNotificationChange}
                                        name="weeklyDigest"
                                        color="primary"
                                    />
                                }
                                label="Еженедельный дайджест"
                            />
                        </Stack>
                    </Box> */}

                    <Box 
                        mt={3} 
                        sx={{ 
                            backgroundColor: '#f5f5f5', 
                            p: { xs: 2, sm: 3 }, 
                            borderRadius: 2,
                        }}
                    >
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="subtitle1" fontWeight="medium" gutterBottom>
                                🔐 Безопасность
                            </Typography>
                            <IconButton 
                                size="small" 
                                onClick={() => setShowPasswordForm(!showPasswordForm)}
                            >
                                {showPasswordForm ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Stack>
                        <Divider sx={{ my: 2 }} />
                        
                        <Collapse in={showPasswordForm}>
                            <Stack spacing={2} sx={{ mb: 2 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    label="Текущий пароль"
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    margin="dense"
                                />
                                <Box sx={{ 
                                    display: 'flex', 
                                    flexDirection: { xs: 'column', sm: 'row' }, 
                                    gap: 2 
                                }}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Новый пароль"
                                        type="password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        margin="dense"
                                    />
                                    <TextField
                                        fullWidth
                                        size="small"
                                        label="Подтвердите пароль"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        margin="dense"
                                    />
                                </Box>
                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    size="small"
                                    onClick={handlePasswordChange}
                                    sx={{ mt: 1 }}
                                >
                                    Изменить пароль
                                </Button>
                            </Stack>
                        </Collapse>
                        
                        <Typography variant="caption" color="text.secondary">
                            Последнее изменение пароля: 3 месяца назад
                        </Typography>
                    </Box>

                    <Box mt={3} textAlign="center">
                        <Button
                            variant="outlined"
                            color="error"
                            size={isMobile ? 'small' : 'medium'}
                            onClick={handleLogout}
                            sx={{ 
                                width: { xs: '100%', sm: 'auto' }, 
                                px: 4,
                            }}
                        >
                            Выйти из аккаунта
                        </Button>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

export default withAuth(Settings);