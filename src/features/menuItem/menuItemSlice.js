import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = 'https://api.dotpe.in/api/catalog/store/1/menu?mDomain=fryerstory.in&saletype=delivery&serviceSubtype=delivery'


export const fetchMenuItems = () => dispatch => {
  dispatch(fetchMenuItemsRequest())
  axios.get(API_URL)
  .then(response => {
      const data = response.data;
      const items = Object.keys(data.menuItems).map(function(key, index) {
          return data.menuItems[key];
      })
      dispatch(fetchMenuItemsSuccess(items));
  })
  .catch(error => {
      dispatch(fetchMenuItemsFailure(error.message));
  })
}

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
  },
})

export const { fetchMenuItemsRequest, fetchMenuItemsSuccess, fetchMenuItemsFailure } = menuItemSlice.actions;

export default menuItemSlice.reducer;