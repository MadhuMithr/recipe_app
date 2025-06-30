// import {configureStore } from '@reduxjs/toolkit';
 import loginreducer from './loginslice'
 import cartReducer from './addtocartslice';
// export default configureStore({
//     reducer:{
//         log : loginreducer
//     },
// }
// );
// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage as default
import { combineReducers } from 'redux';
//import loginreducer from './loginslice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  log: loginreducer, 
  cart:  cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); 
export type RootState = ReturnType<typeof store.getState>;
export default store;
