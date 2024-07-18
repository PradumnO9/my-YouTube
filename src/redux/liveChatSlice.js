import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const liveChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      // remove 1 message from top when hits LIVE_CHAT_COUNT
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      // push first place -> use unshift
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
