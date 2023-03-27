import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './AuthSlice'
import productreducer from './ProductSlice'
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:productreducer,
  },
})
