import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from '../features/menuItem/menuItemSlice';

export default configureStore({
  reducer: {
      menuItem: menuItemReducer
  }
})