import { configureStore } from '@reduxjs/toolkit';
import menuItemReducer from './ducks/menuItemSlice';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
      menuItem: menuItemReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware, logger)
})

sagaMiddleware.run(rootSaga);