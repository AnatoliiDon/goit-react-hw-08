import { createSelector, createSlice } from '@reduxjs/toolkit';
import { apiGetContacts, apiPostContacts, apiDeleteContacts } from './contactsOps';
import { selectFilter } from './filtersSlice';

const INITIAL_STATE = {
  contacts: null,
  loading: false,
  error: null
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  extraReducers: (builder) => builder.addCase(apiGetContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(apiGetContacts.fulfilled, (state, action) => {
    state.loading = false;
    state.contacts = action.payload 
  }).addCase(apiGetContacts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }).addCase(apiPostContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(apiPostContacts.fulfilled, (state, action) => {
    state.loading = false;
    state.contacts.push(action.payload);
  }).addCase(apiPostContacts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }).addCase(apiDeleteContacts.pending, (state) => {
    state.loading = true;
    state.error = null;
  }).addCase(apiDeleteContacts.fulfilled, (state, action) => {
    state.loading = false;
    const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
  }).addCase(apiDeleteContacts.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload;
  }),
});



export const selectContacts = state => state.contactsData.contacts;
export const contactsReducer = contactsSlice.reducer;
export const selectFilteredContacts = createSelector([selectFilter, selectContacts], (filter, contacts) => {
  return contacts?.filter(contact =>contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase().trim()))
})
export const { addContact, deleteContact } = contactsSlice.actions;
