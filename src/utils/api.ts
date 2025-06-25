import axios from 'axios';
import { RegisterUserDto, LoginUserDto } from '@/types/user';

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