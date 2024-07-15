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
    closeMenu: (state) => {
      state.hamBurgerToggle = false
    }
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
