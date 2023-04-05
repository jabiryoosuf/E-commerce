import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './AuthSlice'
import Productreducer from "./ProductSlice"
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:Productreducer,
  },
})
