import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './AuthSlice'
import Productreducer from "./ProductSlice"
import Cartreducer from "./CartSlice"
import Wishlistreducer from "./wishSlice"
import Blogreducer from "./blogSlice"
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:Productreducer,
      cart:Cartreducer,
      wishList:Wishlistreducer,
      blogs:Blogreducer
  },
})


