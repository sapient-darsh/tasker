import { combineReducers } from "redux";
import theme from "./theme/themeSlice";
import auth from "./auth";
import base from "./base";
import employee from "./employee";
import leaves from "./leaves";

const rootReducer = (asyncReducers) => (state, action) => {
  const combinedReducer = combineReducers({
    theme,
    auth,
    base,
    employee,
    leaves,
    ...asyncReducers,
  });
  return combinedReducer(state, action);
};

export default rootReducer;
