

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface AuthState {
//     token: string | null;
//     user: {
//         id: number | null;
//         email: string | null;
//         roles: string[];
//     };
//     isAuthenticated: boolean;
// }

// const initialState: AuthState = {
//     token: localStorage.getItem('token') || null,
//     user: {
//         id: null,
//         email: null,
//         roles: [],
//     },
//     isAuthenticated: !!localStorage.getItem('token'),
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setCredentials: (
//             state,
//             action: PayloadAction<{ token: string; user: { id: number; email: string; roles: string[] } }>
//         ) => {
//             const { token, user } = action.payload;
//             state.token = token;
//             state.user = user;
//             state.isAuthenticated = true;
//             localStorage.setItem('token', token);
//         },
//         logout: (state) => {
//             state.token = null;
//             state.user = {
//                 id: null,
//                 email: null,
//                 roles: [],
//             };
//             state.isAuthenticated = false;
//             localStorage.removeItem('token');
//         },
//     },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;