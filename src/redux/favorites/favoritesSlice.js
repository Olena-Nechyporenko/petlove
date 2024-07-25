import { createSlice } from '@reduxjs/toolkit';
import { getFavorites } from './operations';

const initialState = {
  favorites: [],
  isLoading: false,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getFavorites.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorites = action.payload.noticesFavorites;
      })
      .addCase(getFavorites.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const favoritesReducer = favoritesSlice.reducer;
