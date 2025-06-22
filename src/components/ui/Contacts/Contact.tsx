import * as React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';


import { env } from "@utils"

const MINIO_BUCKET_URL = env.MINIO_BUCKET_URL;

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

export default function Contact() {
    return (
        <React.Fragment>
            <Paper
                elevation={0}
                sx={{
                    border: "none",
                    boxShadow: "none",
                    bgcolor: 'background.paper',
                }}
            >
                <List sx={{ mb: 2 }}>
                    {messages.map(({ id, name, message, person }) => (
                        <ListItemButton
                            key={id}
                            sx={{
                                boxShadow: 'none',
                                borderRadius: 0,
                                '&:hover': {
                                    backgroundColor: 'action.hover',
                                    boxShadow: 'none',
                                },
                                '&:focus-visible': {
                                    outline: 'none',
                                    boxShadow: 'none',
                                },
                            }}
                        >
                            <ListItemAvatar>
                                <Avatar alt={name} src={person} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={
                                    <Typography noWrap>
                                        {name.length > 10 ? `${name.slice(0, 10)}…` : name}
                                    </Typography>
                                }
                                secondary={
                                    <Typography noWrap color="text.secondary">
                                        {message.length > 35 ? `${message.slice(0, 35)}…` : message}
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    ))}
                </List>
            </Paper>
        </React.Fragment>
    );
}