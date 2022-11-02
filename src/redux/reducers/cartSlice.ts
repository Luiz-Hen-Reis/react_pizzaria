import { CartState } from './../../types/CartItem';
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       ADD_TO_CART: ({ cart }, { payload }) => {
            cart.push(payload);
        },
        REMOVE_FROM_CART: ({ cart }, { payload }) => {
           cart.splice(payload, 1);
        },
        CLEAN_CART: ({ cart }) => {
            cart.splice(0, cart.length);
        }
    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, CLEAN_CART } = cartSlice.actions;
export default cartSlice.reducer;