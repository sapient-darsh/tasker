import { createSlice } from "@reduxjs/toolkit";

export const initialState = {};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    employee: (state, action) => {
      state.employee = action.payload;
    },
  },
});

export const { employee } = employeeSlice.actions;

export default employeeSlice.reducer;
