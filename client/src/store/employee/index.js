import { combineReducers } from "@reduxjs/toolkit";
import employee from "./employeeSlice";

const reducer = combineReducers({
  employee,
});

export default reducer;
