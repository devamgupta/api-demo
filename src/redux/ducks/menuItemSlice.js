import { createSlice } from '@reduxjs/toolkit'

export const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState: {
    loading: true,
    items: [],
    error: '',
  },
  reducers: {
    fetchMenuItems: () => {
      // this action is being watched by saga
    },

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
  },
})

export const { fetchMenuItems ,fetchMenuItemsRequest, fetchMenuItemsSuccess, fetchMenuItemsFailure } = menuItemSlice.actions;

export default menuItemSlice.reducer;