import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

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
    builder.addCase(register.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
    });
    // .addCase(logIn.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // })
    // .addCase(logOut.fulfilled, (state, action) => {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(refreshUser.pending, state => {
    //   state.isRefreshing = true;
    // })
    // .addCase(refreshUser.rejected, (state, action) => {
    //   state.isRefreshing = false;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // })
    // .addCase(getCurrent.rejected, (state, action) => {
    //   state.isLoggedIn = false;
    // })
    // .addCase(getCurrent.fulfilled, (state, action) => {
    //   state.user = action.payload.user;
    // });
  },
});

export const authReducer = authSlice.reducer;
