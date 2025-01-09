import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from './Slices/userSlice.js'

export default configureStore({
  reducer: {
    userDetails: userSlice
  },
})
