import axios from 'axios';
import { RegisterUserDto, LoginUserDto, AddContactDto, Contact } from '@/types/user';
import { CreateWorkspaceDto, Workspace } from '@/types/dto/workspace.dto';
import { UpdateContactDto } from '@/types/dto/updateContact.dto';

export const api = axios.create({
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

export const fetchContacts = async (ownerId: number) => {
    const res = await api.get<Contact[]>(`/contacts?ownerId=${ownerId}`);
    return res.data;
};

export const findUserByEmail = async (email: string) => {
    const res = await api.post('users/find', { email })
    return res.data
}

export const createContact = async (dto: AddContactDto) => {
    const res = await api.post('/contacts', dto);
    return res.data;
};

export const updateContact = async ({ id, dto }: { id: number; dto: UpdateContactDto }) => {
    const res = await api.put(`/contacts/${id}`, dto);
    return res.data;
};

export const deleteContact = async (id: number) => {
    await api.delete(`/contacts/${id}`);
    return id;
};