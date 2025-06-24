'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // ✅ Новый хук

// Icons
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

const drawerWidth = 80;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    width: drawerWidth,
    height: '95vh',
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        overflowX: 'hidden',
        backgroundColor: '#FFFFFF',
        borderRight: 'none',
        borderTop: 'none',
        borderRadius: 12,
        padding: '10px',
        position: 'relative',
    },
}));

export default function SideBar() {
    const pathname = usePathname();

    const menuItems = [
        { text: 'Chats', icon: <ChatIcon />, path: '/chats' },
        { text: 'Contacts', icon: <AccountCircleIcon />, path: '/account' },
        { text: 'PhoneCalls', icon: <PhoneCallbackIcon />, path: '/calls' },
        { text: 'Groups', icon: <GroupIcon />, path: '/groups' },
        { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    ];

    const isActive = (path: string) => {
        return pathname.startsWith(path);
    };

    return (
        <Box sx={{ display: 'flex', position: 'relative', height: '100%' }}>
            <Drawer variant="permanent" open={false}>
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        px: 1,
                        paddingBottom: '10px',
                    }}
                >
                    {menuItems.map((item) => (
                        <ListItem key={item.text} disablePadding>
                            <Link href={item.path}>
                                <ListItemButton
                                    sx={{
                                        maxWidth: 50,
                                        justifyContent: 'center',
                                        borderRadius: '12px',
                                        transition: 'all 0.2s ease-in-out',
                                        color: '#333333',
                                        mx: 'auto',
                                        backgroundColor: isActive(item.path) ? '#226DE6' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: isActive(item.path)
                                                ? '#226DE6'
                                                : 'rgba(34, 109, 230, 0.1)',
                                        },
                                        '&:focus-visible': {
                                            outline: '2px solid #226DE6',
                                            outlineOffset: -2,
                                            boxShadow: '0 0 0 2px rgba(34, 109, 230, 0.4)',
                                        },
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            justifyContent: 'center',
                                            color: isActive(item.path) ? '#FFFFFF' : '#7F7F7F',
                                            transition: 'color 0.2s ease-in-out',
                                            '&:hover': {
                                                color: isActive(item.path) ? '#FFFFFF' : '#333333',
                                            },
                                        }}
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={<Typography variant="body2">{item.text}</Typography>}
                                        sx={{ opacity: 0 }}
                                    />
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}