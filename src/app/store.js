import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './ProductSlice'
import usersReducer from './userSlice'


export default configureStore({
  reducer: {
    products: productsReducer,
    users: usersReducer,
  },
});