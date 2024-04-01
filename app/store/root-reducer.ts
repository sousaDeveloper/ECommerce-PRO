import { combineReducers } from "redux";
import userReducer from "./reducers/users/user.reducer";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
