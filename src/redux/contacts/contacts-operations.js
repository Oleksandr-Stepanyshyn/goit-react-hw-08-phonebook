import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const add = createAsyncThunk(
  'contacts/add',
  async (contact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      toast.success(`${contact.name} added to the contacts`, {
        position: 'top-center',
        autoClose: 3000,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetch = createAsyncThunk('contacts/fetch', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

export const del = createAsyncThunk(
  'contacts/delete',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
