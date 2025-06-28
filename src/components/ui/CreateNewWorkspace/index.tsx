import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Box,
    Typography,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '@/hooks/redux';
import { closeModal } from '@/store/reducers/modalReducer';

interface CreateNewWorkspaceProps {
    onCreate: (workspaceData: { name: string; description: string }) => void;
}

export default function CreateNewWorkspace({ onCreate }: CreateNewWorkspaceProps) {
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector((state) => state.modal.open);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleClose = () => {
        dispatch(closeModal());
        setName('');
        setDescription('');
    };

    const handleCreate = () => {
        if (!name.trim()) return;

        onCreate({ name, description });
        handleClose();
    };

    useEffect(() => {
        if (isModalOpen) {
            setName('');
            setDescription('');
        }
    }, [isModalOpen]);

    return (
        <Box>
            <Dialog open={isModalOpen} onClose={handleClose} fullWidth maxWidth="sm">
                <DialogTitle>
                    Найдите вашего собеседника!
                </DialogTitle>
                <DialogContent>
                    <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Название воркспейса"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <TextField
                            margin="dense"
                            label="Описание (необязательно)"
                            type="text"
                            fullWidth
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            sx={{ mt: 2 }}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Отмена
                    </Button>
                    <Button onClick={handleCreate} variant="contained" color="primary" disabled={!name.trim()}>
                        Создать
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}
