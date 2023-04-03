import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './authSlice'
import Productreducer from './ProductSlice'
export const store = configureStore({
  reducer: {
      auth:Authreducer,
      products:Productreducer,
  },
})
