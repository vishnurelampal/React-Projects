import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../HelperFunctions";
const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages = [];
    },
    createCustomChat: (state, action) => {
      state.messages.unshift(action.payload);
    },
  },
});
export const { addMessage, clearMessages, createCustomChat } =
  chatSlice.actions;
export default chatSlice.reducer;
