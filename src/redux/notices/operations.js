import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllNotices = createAsyncThunk(
  'notices/getAllNotices',
  async (data, thunkAPI) => {
    const { keyword } = data;
    try {
      const res = await axios.get('notices', {
        params: {
          keyword: keyword,
          limit: 30,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllCategories = createAsyncThunk(
  'notices/getAllCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('notices/categories');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllSex = createAsyncThunk(
  'notices/getAllSex',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('notices/sex');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllSpecies = createAsyncThunk(
  'notices/getAllSpecies',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('notices/species');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
