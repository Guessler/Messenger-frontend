import React from 'react';
import {
    Avatar,
    Box,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
    alpha,
} from '@mui/material';

const WorkSpace = () => {
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
                boxSizing: "border-box"
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
                        <Typography noWrap>
                            TL
                        </Typography>
                    }
                    secondary={
                        <Typography noWrap color="text.secondary">
                            20.02.2025
                        </Typography>
                    }
                />
            </ListItemButton>

            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#F6F6F6',
                    borderRadius: "12px",
                    mt: 2,
                }}
            />
        </Box>
    );
};

export default WorkSpace;