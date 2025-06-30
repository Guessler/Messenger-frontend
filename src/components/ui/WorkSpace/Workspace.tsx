'use client';

import React, { useState } from 'react';
import { useAppSelector } from '@/hooks/redux';
import {
    Box,
    Avatar,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
    TextField,
    IconButton,
    Divider,
    Menu,
    MenuItem,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

interface MessagesProps {
    id: number;
    message: string;
}

export default function WorkSpace() {
    const selectedContact = useAppSelector((state) => state.workspace.selectedContact);
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState<MessagesProps[]>([]);
    const [contextMenu, setContextMenu] = useState<{
        mouseX: number;
        mouseY: number;
        messageId: number | null;
    } | null>(null);

    const handleSendMessage = () => {
        if (!value.trim()) return;
        const message = {
            id: Date.now(),
            message: value,
        };
        setMessages([...messages, message]);
        setValue('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleContextMenu = (
        event: React.MouseEvent<HTMLDivElement>,
        messageId: number
    ) => {
        event.preventDefault();
        setContextMenu({
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
            messageId,
        });
    };

    const handleCloseMenu = () => {
        setContextMenu(null);
    };

    const handleDeleteMessage = () => {
        if (contextMenu?.messageId !== null) {
            setMessages(messages.filter((msg) => msg.id !== contextMenu?.messageId));
        }
        handleCloseMenu();
    };

    const handleEditMessage = () => {
        const messageToEdit = messages.find(
            (msg) => msg.id === contextMenu?.messageId
        );
        if (messageToEdit) {
            setValue(messageToEdit.message);
            setMessages(messages.filter((msg) => msg.id !== contextMenu?.messageId));
        }
        handleCloseMenu();
    };

    if (!selectedContact) {
        return (
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography color="text.secondary">Контакт не выбран</Typography>
            </Box>
        );
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '96vh',
                    borderRadius: '16px',
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    padding: { xs: '16px', sm: '24px' },
                    boxSizing: 'border-box',
                    transition: 'all 0.3s ease',
                }}
            >
                <ListItemButton
                    sx={{
                        width: '100%',
                        height: '60px',
                        padding: 0,
                        maxHeight: '60px',
                        borderRadius: '12px',
                        backgroundColor: '#F9FAFB',
                        mb: 1,
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#F3F4F6',
                        },
                    }}
                >
                    <ListItemAvatar>
                        <Avatar
                            sx={{
                                width: 40,
                                height: 40,
                                backgroundColor: '#3B82F6',
                            }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography variant="subtitle1" fontWeight={600}>
                                {selectedContact.name}
                            </Typography>
                        }
                        secondary={
                            <Typography variant="body2" color="text.secondary">
                                {selectedContact.message || 'Нет последнего сообщения'}
                            </Typography>
                        }
                        primaryTypographyProps={{ noWrap: true }}
                        secondaryTypographyProps={{ noWrap: true }}
                    />
                </ListItemButton>

                <Divider sx={{ my: 2 }} />

                <Box
                    sx={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '16px',
                        p: 2,
                        boxSizing: 'border-box',
                        overflowY: 'auto',
                        border: '1px solid #E5E7EB',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1,
                    }}
                >
                    <Box
                        sx={{
                            alignSelf: 'flex-start',
                            maxWidth: '70%',
                            backgroundColor: '#FFFFFF',
                            color: 'text.primary',
                            borderRadius: '8px',
                            p: 1.5,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                            fontSize: '0.875rem',
                        }}
                    >
                        Привет! Как дела? 😊
                    </Box>

                    {messages.map((message) => (
                        <Box
                            key={message.id}
                            onContextMenu={(e) => handleContextMenu(e, message.id)}
                            sx={{
                                alignSelf: 'flex-end',
                                position: 'relative',
                                maxWidth: '70%',
                                backgroundColor: '#3B82F6',
                                color: '#fff',
                                borderRadius: '8px',
                                p: 1.5,
                                boxShadow: '0 1px 3px rgba(59,130,246,0.3)',
                                fontSize: '0.875rem',
                                cursor: 'context-menu',
                                '&:hover': {
                                    boxShadow: '0 2px 6px rgba(59,130,246,0.4)',
                                },
                            }}
                        >
                            {message.message}
                        </Box>
                    ))}

                    <Box
                        sx={{
                            alignSelf: 'flex-start',
                            maxWidth: '70%',
                            backgroundColor: '#FFFFFF',
                            color: 'text.primary',
                            borderRadius: '8px',
                            p: 1.5,
                            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                            fontSize: '0.875rem',
                        }}
                    >
                        Всё хорошо, спасибо!
                    </Box>
                </Box>

                <Box
                    component="form"
                    onSubmit={(e) => e.preventDefault()}
                    sx={{
                        mt: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        backgroundColor: '#F9FAFB',
                        borderRadius: '12px',
                        p: 1,
                        border: '1px solid #E5E7EB',
                        transition: 'box-shadow 0.3s ease',
                        '&:focus-within': {
                            boxShadow: '0 0 8px rgba(59, 130, 246, 0.3)',
                        },
                    }}
                >
                    <TextField
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        fullWidth
                        variant="outlined"
                        placeholder="Введите сообщение..."
                        multiline
                        minRows={2}
                        maxRows={4}
                        sx={{
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '8px',
                                padding: '8px 12px',
                                minHeight: '56px',
                                display: 'flex',
                                alignItems: 'center',
                            },
                            '& textarea': {
                                resize: 'none',
                            },
                        }}
                    />
                    <IconButton
                        type="submit"
                        color="primary"
                        onClick={handleSendMessage}
                        sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: '#3B82F6',
                            color: '#ffffff',
                            boxShadow: '0 2px 6px rgba(59, 130, 246, 0.3)',
                            '&:hover': {
                                backgroundColor: '#2563EB',
                                boxShadow: '0 4px 10px rgba(37, 99, 235, 0.4)',
                            },
                            transition: 'all 0.2s ease',
                            alignSelf: 'center',
                        }}
                    >
                        <SendIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>

            {contextMenu && (
                <Menu
                    open={true}
                    onClose={handleCloseMenu}
                    anchorReference="anchorPosition"
                    anchorPosition={{
                        top: contextMenu.mouseY,
                        left: contextMenu.mouseX,
                    }}
                    PaperProps={{
                        style: {
                            width: 150,
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                            borderRadius: '8px',
                        },
                    }}
                >
                    <MenuItem onClick={handleEditMessage}>Редактировать</MenuItem>
                    <MenuItem onClick={handleDeleteMessage} sx={{ color: '#EF4444' }}>
                        Удалить
                    </MenuItem>
                </Menu>
            )}
        </>
    );
}