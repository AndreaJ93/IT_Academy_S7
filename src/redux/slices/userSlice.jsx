import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  wantsToViewMore: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    login: (state) => {
      state.isAuthenticated = true;
    },
    setWantsToViewMore: (state, action) => {
      state.wantsToViewMore = action.payload;
    },
  },
});

export const { setUser, logout, login, setWantsToViewMore } = userSlice.actions;

export default userSlice.reducer;
