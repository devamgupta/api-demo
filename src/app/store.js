import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from '../features/menuItem/menuItemSlice';
import logger from 'redux-logger';

export default configureStore({
  reducer: {
      menuItem: menuItemReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})