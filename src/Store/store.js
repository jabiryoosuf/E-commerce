import { configureStore } from '@reduxjs/toolkit'
import authReucer from './AuthSlice'
export const store = configureStore({
  reducer: {
    auth: authReucer
  }
})