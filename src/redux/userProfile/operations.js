import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getFullUserInfo = createAsyncThunk(
  'userProfile/getFullUserInfo',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('users/current/full');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editUserInfo = createAsyncThunk(
  'userProfile/editUserInfo',
  async (userData, thunkAPI) => {
    try {
      await axios.patch('users/current/edit', userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
