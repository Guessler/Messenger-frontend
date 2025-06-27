import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.slice';
import  modalReducer  from './reducers/modalReducer';
import workspaceReducer from './reducers/workspaceReducer';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
        workspace: workspaceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;