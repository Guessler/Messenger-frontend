'use client'
import React from 'react';
import {
    Box,
    Button,
    Typography,
    styled,
    InputBase,
    alpha,
    useTheme,
} from '@mui/material';

import { RuText } from '../../../consts/text/ru';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import Contact from './Contact';

const SearchWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    marginLeft: 0,
    width: '100%',
    transition: theme.transitions.create(['width']),
    '& .search-input': {
        width: '100%',
        height: '40px',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.05),
        paddingLeft: '44px',
        paddingRight: '14px',
        transition: theme.transitions.create(['width', 'padding']),
        display: 'flex',
        alignItems: 'center',
        '& input': {
            fontSize: '0.875rem',
            width: '100%',
            textAlign: 'left',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
    top: 0,
    bottom: 0,
    color: alpha(theme.palette.text.primary, 0.5),
}));

const Contacts = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'auto',
                width: '300px',
                height: '96vh',
                borderRadius: '12px',
                backgroundColor: '#FFFFFF',
                borderRight: '1px solid #e0e0e0',
                boxShadow: 1,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    padding: '20px',
                    paddingTop: '30px',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                <Typography variant="h6">{RuText.MESSAGES}</Typography>

                <Button
                    sx={{
                        width: 50,
                        height: 50,
                        minWidth: 50,
                        maxWidth: 50,
                        minHeight: 50,
                        maxHeight: 50,
                        borderRadius: '50%',
                        padding: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                        },
                    }}
                >
                    <EditIcon fontSize="small" />
                </Button>
            </Box>

            <Box sx={{ px: 2.5, pb: 1 }}>
                <SearchWrapper>
                    <SearchIconWrapper>
                        <SearchIcon fontSize="small" />
                    </SearchIconWrapper>
                    <InputBase
                        placeholder="Поиск…"
                        inputProps={{ 'aria-label': 'поиск контактов' }}
                        className="search-input"
                        sx={{
                            fontSize: '0.875rem',
                        }}
                    />
                </SearchWrapper>
            </Box>

                <Contact />
        </Box>
    );
};

export default Contacts;