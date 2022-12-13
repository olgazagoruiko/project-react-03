import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {}
  },
  reducers: {
    increment: (state, data) => {
       console.log('data======',data);
      let articul = data.payload;
      if (state.value[articul] === undefined) state.value[articul] = 0;
        state.value[articul]++;
        console.log('state.value======',state.value);     
    },
    minus: (state, data) => {
      let articul = data.payload;
      if (state.value[articul] !== 0) {state.value[articul]--};
      if (state.value[articul] === 0){delete state.value[articul]};
      
      
   },
    // plus: (state, data) => {
    //   console.log(data);
    //   let articul = data.payload;
    //   if (state.value[articul]!==undefined) state.value[articul]++;        
    // },
    remove: (state, data) => {
      let articul = data.payload;
      delete state.value[articul];    
    }
  }
  
});
export const { increment, minus, remove} = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;