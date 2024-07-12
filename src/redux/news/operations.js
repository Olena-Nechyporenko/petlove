import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async (keyword, thunkAPI) => {
    try {
      const res = await axios.get('news', {
        params: {
          keyword: keyword,
          page: 1,
          limit: 6,
        },
      });
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
