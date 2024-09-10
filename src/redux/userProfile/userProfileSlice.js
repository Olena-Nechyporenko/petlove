import { createSlice } from '@reduxjs/toolkit';
import { getFullUserInfo } from './operations';

const initialState = {
  userInfo: {},
  userAvatar: '',
  isLoading: false,
};

const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setAvatar(state, action) {
      state.userAvatar = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getFullUserInfo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFullUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userInfo = action.payload;
      })
      .addCase(getFullUserInfo.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setAvatar } = userProfileSlice.actions;

export const userProfileReducer = userProfileSlice.reducer;
