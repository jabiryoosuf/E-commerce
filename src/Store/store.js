import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './authSlice'
import Productreducer from "./ProductSlice"
import Cartreducer from "./CartSlice"
import Wishlistreducer from "./wishSlice"
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:Productreducer,
      cart:Cartreducer,
      wishList:Wishlistreducer
  },
})
