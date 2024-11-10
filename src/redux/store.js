import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';
import { filterReducer } from './filter/slice';

export const store = configureStore({
  reducer: {
    contactsData: contactsReducer,
    filter: filterReducer,
  },
});
