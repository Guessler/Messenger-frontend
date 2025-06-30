import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth.slice';
import  modalReducer  from './reducers/modalReducer';
import workspaceReducer from './reducers/workspaceReducer';
import contactsSlice from './reducers/contactsSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        modal: modalReducer,
        workspace: workspaceReducer,
        contacts: contactsSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;