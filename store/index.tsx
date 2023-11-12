import { configureStore } from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

import cartSlice from './cart-slice';
import searchSlice from './search-slice';


const reducers = {
  cart: cartSlice.reducer, search:searchSlice.reducer
} 
const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof rootReducer>

export default store;