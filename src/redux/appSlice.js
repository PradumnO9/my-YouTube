import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    hamBurgerToggle: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.hamBurgerToggle = !state.hamBurgerToggle;
    },
  },
});

export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;
