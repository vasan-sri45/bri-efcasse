import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  hydrated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      state.hydrated = true;

      if (typeof window !== "undefined") {
        localStorage.setItem("bc_user", JSON.stringify(action.payload));
      }
    },

    clearUser(state) {
      state.user = null;
      state.hydrated = true;

      if (typeof window !== "undefined") {
        localStorage.removeItem("bc_user");
      }
    },

    hydrateUser(state, action) {
      state.user = action.payload;
      state.hydrated = true;
    },
  },
});

export const { setUser, clearUser, hydrateUser } = authSlice.actions;
export default authSlice.reducer;
