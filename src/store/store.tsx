import {configureStore} from "@reduxjs/toolkit";
import pizza from './pizzaSlice.tsx'
import cart from './cartSlice.tsx'


const store = configureStore({
   reducer: {
      pizza,
      cart
   },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store