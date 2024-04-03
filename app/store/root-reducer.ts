import { combineReducers } from "redux";
import userReducer from "./toolkit/user/user.slice";
import cartReducer from "./reducers/cart/cart.reducer";
import categoryReducer from "./reducers/categories/categories.reducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
});

export default rootReducer;
