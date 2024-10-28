import { createSlice } from '@reduxjs/toolkit';
import {
  getAllCategories,
  getAllNotices,
  getAllSex,
  getAllSpecies,
} from './operations';

const initialState = {
  notices: [],
  categories: [],
  sex: [],
  species: [],
  totalPages: 1,
  isLoading: false,
  filters: {
    keyword: null,
    category: null,
    gender: null,
    type: null,
    popularity: null,
  },
};

const noticesSlice = createSlice({
  name: 'notices',
  initialState,
  reducers: {
    setKeyword(state, action) {
      state.filters.keyword = action.payload;
    },
    setCategory(state, action) {
      state.filters.category = action.payload;
    },
    setGender(state, action) {
      state.filters.gender = action.payload;
    },
    setType(state, action) {
      state.filters.type = action.payload;
    },
    setPopularity(state, action) {
      state.filters.popularity = action.payload;
    },
    setResetFilters(state, action) {
      state.filters.keyword = action.payload;
      state.filters.category = action.payload;
      state.filters.gender = action.payload;
      state.filters.type = action.payload;
      state.filters.popularity = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllNotices.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload.results;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getAllNotices.rejected, (state, action) => {
        state.isLoading = false;
      })

      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = ['show all', ...action.payload];
      })

      .addCase(getAllSex.fulfilled, (state, action) => {
        state.sex = ['show all', ...action.payload];
      })

      .addCase(getAllSpecies.fulfilled, (state, action) => {
        state.species = ['show all', ...action.payload];
      });
  },
});

export const {
  setKeyword,
  setCategory,
  setGender,
  setType,
  setPopularity,
  setResetFilters,
} = noticesSlice.actions;

export const noticesReducer = noticesSlice.reducer;
