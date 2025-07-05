'use client';

import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { closeModal } from '@/store/reducers/modalReducer';
import { addContact } from '@/store/reducers/contactsSlice';
import {  createContact as apiCreateContact, findUserByEmail } from '@/utils/api';

interface CreateNewWorkspaceProps {
  onCreate: (workspaceData: { name: string; description: string }) => void;
}

export default function CreateNewWorkspace({ onCreate }: CreateNewWorkspaceProps) {
  const dispatch = useAppDispatch();
  const isModalOpen = useAppSelector((state) => state.modal.open);
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleClose = () => {
    setEmail('');
    setDescription('');
    setError('');
    dispatch(closeModal());
  };

  const handleCreate = async () => {
    if (!email.trim()) return;
  
    try {
      const user = await findUserByEmail(email.trim());
  
      dispatch(addContact({ name: user.name }));
  
      onCreate({ name: user.name, description });
  
      handleClose();
    } catch (err) {
      setError('Пользователь с таким email не найден');
    }
  };

  return (
    <Box>
      <Dialog open={isModalOpen} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>Найдите вашего собеседника!</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off" sx={{ mt: 2 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <TextField
              autoFocus
              margin="dense"
              label="Email человека, с которым хотите начать общение"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              error={!!error}
              helperText="Введите email существующего пользователя"
              sx={{ mt: 2 }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Отмена
          </Button>
          <Button
            onClick={handleCreate}
            variant="contained"
            color="primary"
            disabled={!email.trim()}
          >
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}