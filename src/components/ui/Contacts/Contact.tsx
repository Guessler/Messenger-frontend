// Contact.tsx

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
];

export default function Contact({ onSelectWorkspace }: ContactProps) {
    return (
        <Paper elevation={0}>
            <List>
                {messages.map(({ id, name, message, person }) => (
                    <ListItemButton
                        key={id}
                        onClick={() => onSelectWorkspace?.({ id, name, message })}
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