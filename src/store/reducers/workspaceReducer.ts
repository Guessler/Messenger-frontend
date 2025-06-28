// store/reducers/workspaceReducer.ts

import { createSlice } from '@reduxjs/toolkit';

interface SelectedContact {
    id: number;
    name: string;
    message: string;
}

interface WorkspaceState {
    selectedContact: SelectedContact | null;
}

const initialState: WorkspaceState = {
    selectedContact: null,
};

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {
        selectContact: (state, action) => {
            state.selectedContact = action.payload;
        },
        deselectContact: (state) => {
            state.selectedContact = null;
        },
    },
});

export const { selectContact, deselectContact } = workspaceSlice.actions;

export default workspaceSlice.reducer;