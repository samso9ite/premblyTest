import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState:CartState ={
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
    totalItem: 0,
}
const cartSlice = createSlice({
  name: 'cart',
  initialState,  

//   This add an item to the cart
  reducers: {
    replaceCart(state, action:PayloadAction<CartState>) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },

    // This increases the quantity of an item in the cart
    addItemToCart(state, action:PayloadAction<Product>) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalPrice = state.totalPrice + existingItem.price;
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
         ...newItem,
         quantity:1
        });
      } else {
        existingItem.quantity++;
        
      }
    },

    // This removes an item from the cart by reducing it's quantity
    removeItemFromCart(state, action:PayloadAction<string | number>) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id == id);
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - existingItem.price
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
    
    // This function clears a selected item from the cart   
    removeItem(state, action:PayloadAction<string | number>){
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