import { combineReducers } from "redux";
import userReducer from "./reducers/users/user.reducer";
import cartReducer from "./reducers/cart/cart.reducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
});

export default rootReducer;
