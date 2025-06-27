import { createSlice } from '@reduxjs/toolkit';

interface WorkspaceState {
    selectedWorkspaceId: string | null;
}

const initialState: WorkspaceState = {
    selectedWorkspaceId: null,
};

const workspaceSlice = createSlice({
    name: 'workspace',
    initialState,
    reducers: {
        selectWorkspace: (state, action) => {
            state.selectedWorkspaceId = action.payload;
        },
        deselectWorkspace: (state) => {
            state.selectedWorkspaceId = null;
        },
    },
});

export const { selectWorkspace, deselectWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;