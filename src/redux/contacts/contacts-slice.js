import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from '.';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.fetch.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.fetch.fulfilled](state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.fetch.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.add.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.add.fulfilled](state, action) {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [contactsOperations.add.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [contactsOperations.del.pending](state) {
      state.isLoading = true;
    },
    [contactsOperations.del.fulfilled](state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.isLoading = false;
    },
    [contactsOperations.del.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default contactsSlice.reducer;
