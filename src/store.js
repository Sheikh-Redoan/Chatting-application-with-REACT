import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slices/userSlice.js';
import activeChatReducer from './Slices/ActiveChatSlice.js';

export default configureStore({
  reducer: {
    userDetails: userSlice,
    activeChat: activeChatReducer, // Correct import for activeChat reducer
  },
});
