import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

export interface AuthState {
    token: string | null;
    user: User | null;
    isAuthenticated: boolean;
}

const storedToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const initialState: AuthState = {
    token: storedToken,
    user: null,
    isAuthenticated: !!storedToken,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ token: string; user: User }>
        ) => {
            const { token, user } = action.payload;
            state.token = token;
            state.user = user;
            state.isAuthenticated = true;

            if (typeof window !== 'undefined') {
                localStorage.setItem('token', token);
            }
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;

            if (typeof window !== 'undefined') {
                localStorage.removeItem('token');
            }
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;