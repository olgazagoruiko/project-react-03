import { configureStore } from '@reduxjs/toolkit';
import goodReducer from '../store/goodsSlice';
import cartReducer from '../store/cartSlice';

export default configureStore({
  reducer: {
    goods: goodReducer,
    cart:cartReducer
  },
});