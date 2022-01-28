import { createSlice } from '@reduxjs/toolkit'

export const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState: {
    loading: true,
    items: [],
    error: '',
  },
  reducers: {
    fetchMenuItemsRequest: state => {
      state.loading = true;
    },

    fetchMenuItemsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.error = '';
    },

    fetchMenuItemsFailure: (state, action) => {
      state.loading = false;
      state.items = [];
      state.error = action.payload;
    }
  }
})

export const { fetchMenuItemsRequest, fetchMenuItemsSuccess, fetchMenuItemsFailure } = menuItemSlice.actions;

export default menuItemSlice.reducer;