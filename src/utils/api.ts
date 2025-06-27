import axios from 'axios';
import { RegisterUserDto, LoginUserDto } from '@/types/user';
import { CreateWorkspaceDto, Workspace } from '@/types/dto/workspace.dto';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
});

export const registerUser = async (userData: RegisterUserDto) => {
    const response = await api.post<{ token: string }>('auth/register', userData);
    return response.data;
};

export const loginUser = async (userData: LoginUserDto) => {
    const response = await api.post<{ token: string }>('auth/login', userData);
    return response.data;
};

export const createWorkspace = async (workspaceData: CreateWorkspaceDto) => {
    const response = await api.post<Workspace>('workspaces', workspaceData);
    return response.data;
};
