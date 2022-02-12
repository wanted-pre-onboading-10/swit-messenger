import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import session from 'redux-persist/lib/storage/session';
import logger from 'redux-logger';
import rootReducer from 'redux/slices';

const persistConfig = {
  key: 'root',
  storage: session,
  whitelist: ['user'],
};

const enhancer = process.env.NODE_ENV === 'production' ? [] : [logger];

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: enhancer,
});
export const persistor = persistStore(store);
