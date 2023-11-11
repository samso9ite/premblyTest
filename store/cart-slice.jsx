import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
  },

//   This add an item to the cart
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },

    // This increases the quantity of an item in the cart
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + existingItem.price;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        
      }
    },

    // This removes an item from the cart by reducing it's quantity
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    
    // This function clears a selected item from the cart   
    removeItem(state, action){
        const id = action.payload
        const existingItem = state.items.find((item) => item.id == id);
        if(existingItem.quantity !== 0){
            let totalItemPrice = existingItem.price * existingItem.quantity
            state.totalPrice = state.totalPrice - totalItemPrice
            state.totalQuantity = state.totalQuantity - existingItem.quantity
            state.items = state.items.filter((item) => item.id !== id)
        }
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;