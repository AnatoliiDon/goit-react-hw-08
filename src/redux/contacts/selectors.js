import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contactsData.contacts;

export const selectFilteredContacts = createSelector(
  [selectFilter, selectContacts],
  (filter, contacts) => {
    return contacts?.filter(
      contact =>
        contact.name
          .toLocaleLowerCase()
          .includes(filter.toLocaleLowerCase().trim()) ||
        contact.number.includes(filter.toLocaleLowerCase().trim())
    );
  }
);
