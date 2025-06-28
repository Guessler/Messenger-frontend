// components/ui/Contacts/Contacts.tsx

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
import Link from 'next/link';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, Box, InputBase, styled } from '@mui/material';
import { useAppDispatch } from '@/hooks/redux';
import { openModal } from '@/store/reducers/modalReducer';

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

type ContactProps = {
    onSelectWorkspace?: (contact: { id: number; name: string; message: string }) => void;
};

const messages = [
    {
        id: 1,
        name: 'Александр',
        message: "Привет! Как насчёт встретиться на выходных? Хочу показать новый парк в районе.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 2,
        name: 'Мария',
        message: "Посоветуй что-нибудь интересное для подарка на день рождения. Уже весь интернет пересмотрела.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 3,
        name: 'Дмитрий',
        message: "Сегодня готовил новое блюдо по рецепту из YouTube, получилось неожиданно вкусно!",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 4,
        name: 'Екатерина',
        message: "Ура! Наконец-то достала билеты на конференцию по дизайну, давно мечтала попасть.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 5,
        name: 'Николай',
        message: "Запись к врачу перенесена на следующий вторник. Придётся подождать ещё немного.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 6,
        name: 'Ольга',
        message: "Обсуждали сегодня на работе интерфейс мобильного приложения. Думаю, нужно всё переделать с нуля.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },
    {
        id: 7,
        name: 'Татьяна',
        message: "Решила устроить пикник в субботу! Кто хочет присоединиться? Просто скажите, что привезёте.",
        person: `${MINIO_BUCKET_URL}/tinyline.svg`,
    },

];
export default function Contacts() {
    const dispatch = useDispatch();
    const modalDispatch = useAppDispatch()

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
                    onClick={() => { modalDispatch(openModal()) }}
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

            <List sx={{ mb: 2 }}>
                {messages.map(({ id, name, message, person }) => (
                    <ListItemButton
                        key={id}  // ✅ Add this line
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