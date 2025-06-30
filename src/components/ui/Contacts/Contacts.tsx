import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { env } from "@utils";
import { useDispatch } from 'react-redux';
import { selectContact } from '@/store/reducers/workspaceReducer';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Box, InputBase, styled } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { openModal } from '@/store/reducers/modalReducer';

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

export default function Contacts() {
    const dispatch = useDispatch();
    const modalDispatch = useAppDispatch();

    const contacts = useAppSelector((state) => state.contacts.contacts);

    const staticContacts = [
        {
            id: 1,
            name: 'Избранное',
            message: "Тут находится все, что важно для тебя",
            person: `${MINIO_BUCKET_URL}/favourites.svg`,
        },
        {
            id: 2,
            name: 'Bot',
            message: "Дам ответ на любой вопрос",
            person: `${MINIO_BUCKET_URL}/bot.svg`,
        },
    ];

    return (
        <Paper
            elevation={0}
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
                <Typography variant="h6">Сообщения</Typography>
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
                    }}
                    onClick={() => modalDispatch(openModal())}
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
                        sx={{ fontSize: '0.875rem' }}
                    />
                </SearchWrapper>
            </Box>

            <List sx={{ mb: 2 }}>
                {staticContacts.map(({ id, name, message, person }) => (
                    <ListItemButton
                        key={id}
                        onClick={() => dispatch(selectContact({ id, name, message }))}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                            },
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar alt={name} src={person} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography noWrap>{name}</Typography>}
                            secondary={<Typography noWrap color="text.secondary">{message.slice(0, 35)}...</Typography>}
                        />
                    </ListItemButton>
                ))}

                {contacts.length > 0 && (
                    <Box sx={{ px: 2.5, py: 1 }}>
                        <Typography variant="caption" color="text.secondary">
                            Контакты
                        </Typography>
                    </Box>
                )}

                {contacts.map((contact) => (
                    <ListItemButton
                        key={contact.id}
                        onClick={() => dispatch(selectContact({
                            id: contact.id,
                            name: contact.name,
                            message: "Пример последнего сообщения"
                        }))}
                        sx={{
                            boxShadow: 'none',
                            borderRadius: 0,
                            '&:hover': {
                                backgroundColor: 'action.hover',
                            },
                            '&:focus-visible': {
                                outline: 'none',
                            },
                        }}
                    >
                        <ListItemAvatar>
                            <Avatar alt={contact.name} src={`${MINIO_BUCKET_URL}/default-avatar.png`} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={<Typography noWrap>{contact.name}</Typography>}
                            secondary={<Typography noWrap color="text.secondary">Пример сообщения</Typography>}
                        />
                    </ListItemButton>
                ))}

                {contacts.length === 0 && (
                    <Box sx={{ px: 2.5, py: 2 }}>
                        <Typography variant="body2" color="text.secondary" align="center">
                            Контактов пока нет
                        </Typography>
                    </Box>
                )}
            </List>
        </Paper>
    );
}

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