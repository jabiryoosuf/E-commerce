import { configureStore } from '@reduxjs/toolkit'
import Authreducer from './AuthSlice'
export const store = configureStore({
  reducer: {
      auth:Authreducer
  },
})
