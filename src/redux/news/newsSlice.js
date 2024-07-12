import { createSlice } from '@reduxjs/toolkit';
import { getAllNews } from './operations';

const initialState = {
  news: [],
  keyword: null,
  isLoading: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.results;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setKeyword } = newsSlice.actions;

export const newsReducer = newsSlice.reducer;
