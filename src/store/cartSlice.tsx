import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPizza} from "../types/IPizza.ts";

export interface ICartItem {
  pizza: IPizza,
  count: number
}

interface IInitialState {
  cartList: Array<ICartItem>
}


const initialState: IInitialState = {
  cartList: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<IPizza>) {
      const item = state.cartList.filter(item => item.pizza.id === action.payload.id);
      if (item.length > 0) {
        item[0].count += 1
      } else {
        state.cartList.push({
          pizza: action.payload,
          count: 1
        });
      }
    },
    clearCart(state) {
      state.cartList = []
    },
    pizzaIncrement(state, action: PayloadAction<ICartItem>) {
      const item = state.cartList.filter(pizza => pizza.pizza.id === action.payload.pizza.id);
      item[0].count += 1
    },
    pizzaDecrement(state, action: PayloadAction<ICartItem>) {
      const item = state.cartList.filter(pizza => pizza.pizza.id === action.payload.pizza.id);
      if(item[0].count>0){
        item[0].count -= 1
      }
    },
    deleteCart(state, action: PayloadAction<ICartItem>) {
      state.cartList = state.cartList.filter(pizza => pizza.pizza.id !== action.payload.pizza.id)
    }
  }
})


export const {addCart, clearCart, pizzaIncrement, pizzaDecrement,deleteCart} = cartSlice.actions
export default cartSlice.reducer

