import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
