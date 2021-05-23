import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../slices/basketSlice';

//THE global store setup
export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
