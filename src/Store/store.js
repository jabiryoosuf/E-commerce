import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './authSlice'
import Productreducer from "./ProductSlice"
import cartreducer from './CartSlice'
import wishListreducer from './WishlistSlice'
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:Productreducer,
      cart: cartreducer,
      wishlist:wishListreducer
  },
})
