import { jwtDecode } from 'jwt-decode';

export interface JwtPayload {
    email: string;
    name: string;
    id: number;
    roles: string[];
}

export function getToken(): string | null {
    if (typeof window === 'undefined') return null;

    return localStorage.getItem('token');
}

export function getUserFromToken(): JwtPayload | null {
    const token = getToken();
    if (!token) return null;

    try {
        return jwtDecode<JwtPayload>(token);
    } catch (error) {
        console.error('Invalid token', error);
        return null;
    }
}