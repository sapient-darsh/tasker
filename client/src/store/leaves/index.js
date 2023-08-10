import { combineReducers } from "@reduxjs/toolkit";
import leaves from "./leavesSlice";

const reducer = combineReducers({
    leaves,
});

export default reducer;
