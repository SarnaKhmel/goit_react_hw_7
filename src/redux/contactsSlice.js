import { createSlice } from '@reduxjs/toolkit';
import {
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledFetch,
  handlePending,
  handleRejected,
} from './handlers';
import { addContact, deleteContact, fetchContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: handleFulfilledFetch,
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: handleFulfilledAdd,
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: handleFulfilledDelete,
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;
