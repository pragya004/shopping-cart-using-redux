import { combineReducers } from "redux";
import { menuReducer } from "./reducer";

const rootReducer = combineReducers({
  menuReducer,
});

export default rootReducer;
