import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './authSlice'
import productreducer from './ProductSlice'
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:productreducer,
  },
})
