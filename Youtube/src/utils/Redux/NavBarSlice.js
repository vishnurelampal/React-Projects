import { createSlice } from "@reduxjs/toolkit";

const NavBarSlice = createSlice({
  name: "NavBar",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    turOffToggleMenu: (state) => {
      state.isMenuOpen = false;
    },
    turOnToggleMenu: (state) => {
      state.isMenuOpen = true;
    },
  },
});
export const { toggleMenu, turOffToggleMenu, turOnToggleMenu } =
  NavBarSlice.actions;
export default NavBarSlice.reducer;
