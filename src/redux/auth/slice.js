import { createSlice } from '@reduxjs/toolkit';
import { apiLoginUser, apiRegistration } from './operations';

const INITIAL_STATE = {
  user: null,
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  extraReducers: builder =>
    builder
      .addCase(apiRegistration.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiRegistration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(apiLoginUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(apiLoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const INITIAL_STATE = {
//   user: {
//     name: null,
//     email: null,
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };
// const authSlice = createSlice({
//   name: 'auth',
//   initialState: INITIAL_STATE,
//   reducers: {},
// });

// export const authReducer = authSlice.reducer;
// export const {} = authSlice.actions;
