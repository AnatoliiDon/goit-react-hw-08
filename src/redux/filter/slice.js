import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  filters: {
    name: '',
    number: '',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.filters.name = action.payload;
      state.filters.number = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
