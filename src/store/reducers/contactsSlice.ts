import { createSlice } from "@reduxjs/toolkit";

interface Contacts {
    id: number;
    name: string,
}

interface ContactsState {
    contacts: Contacts[];
    nextId: number
}

const initialState: ContactsState = {
    contacts: [
        { id: 1, name: 'Alex' },
    ],
    nextId: 2,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: ({
        addContact: (state, action) => {
            const newContact = {
                id: state.nextId++,
                name: action.payload.name.trim()
            }
            state.contacts.push(newContact)
        }
    })
})

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;