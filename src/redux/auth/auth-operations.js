import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error(`Incorrect login or password`, {
        position: 'top-center',
        autoClose: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      toast.error(`${error.message}`, {
        position: 'top-center',
        autoClose: 3000,
      });
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistToken = state.auth.token;

    if (!persistToken) {
      return rejectWithValue();
    }

    token.set(persistToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
