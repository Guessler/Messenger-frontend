import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.slice';
import  modalReducer  from './reducers/modalReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;