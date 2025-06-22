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

import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';

import { env } from "@utils";

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

const drawerWidth = 80;

const Drawer = styled(MuiDrawer)(({ theme }) => ({
    width: drawerWidth,
    height: "95vh",
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
        position: "relative ",
    },

}));

export default function SideBar() {
    const menuItems = [
        { text: 'Chats', icon: <ChatIcon /> },
        { text: 'Contacts', icon: <AccountCircleIcon /> },
        { text: 'PhoneCalls', icon: <PhoneCallbackIcon /> },
        { text: 'Groups', icon: <GroupIcon /> },
        { text: 'Notifications', icon: <NotificationsIcon /> },
        { text: 'Settings', icon: <SettingsIcon /> },
    ];

    return (
    
    <Box sx={{ display: 'flex', position: "relative", height: "100%"  }}>
            <Drawer variant="permanent" open={false}>
                {/* <img src={`${MINIO_BUCKET_URL}/tinyline.svg`} alt={`${MINIO_BUCKET_URL}/tinyline.svg`} /> */}
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
                            <ListItemButton
                                sx={{
                                    maxWidth: 50,
                                    justifyContent: 'center',
                                    borderRadius: '12px',
                                    transition: 'all 0.2s ease-in-out',
                                    color: '#333333',
                                    mx: 'auto',

                                    '&:hover': {
                                        backgroundColor: 'rgba(34, 109, 230, 0.1)',
                                    },

                                    '&:active': {
                                        backgroundColor: '#226DE6',
                                        color: '#FFFFFF',

                                        '& .MuiListItemIcon-root': {
                                            color: '#FFFFFF',
                                        },
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
                                        color: '#7F7F7F',
                                        transition: 'color 0.2s ease-in-out',

                                        '&:hover': {
                                            color: '#333333',
                                        },

                                        '&:active': {
                                            color: '#FFFFFF',
                                        },
                                    }}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={<Typography variant="body2">{item.text}</Typography>}
                                    sx={{
                                        opacity: 0,
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
}
