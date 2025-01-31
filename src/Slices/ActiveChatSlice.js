import { createSlice } from '@reduxjs/toolkit';

// Initial state is pulled from localStorage, if available
const initialState = {
  value: localStorage.getItem("activeChatData")
    ? JSON.parse(localStorage.getItem("activeChatData"))
    : "",  // Default is an empty string if no data in localStorage
};

export const activeChatSlice = createSlice({
  name: 'activeChat',
  initialState,
  reducers: {
    activechatinfo: (state, action) => {
      // Set the new active chat info
      state.value = action.payload;
      
      // Update localStorage with the new active chat info
      localStorage.setItem("activeChatData", JSON.stringify(action.payload));
      
      // Optionally, log the updated state for debugging purposes
      console.log(state.value);
    },
  },
});

// Export the action
export const { activechatinfo } = activeChatSlice.actions;

// Export the reducer
export default activeChatSlice.reducer;
