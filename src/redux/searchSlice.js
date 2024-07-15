import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    casheResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { casheResults } = searchSlice.actions;
export default searchSlice.reducer;
