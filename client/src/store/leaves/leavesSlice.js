import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const leavesSlice = createSlice({
  name: "leaves",
  initialState,
  reducers: {
    leaves: (state, action) => {
      state.leaves = action.payload;
    },
  },
});

export const { leaves } = leavesSlice.actions;

export default leavesSlice.reducer;
