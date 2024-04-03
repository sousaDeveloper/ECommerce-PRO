import { combineReducers } from "redux";
import userReducer from "./reducers/users/user.reducer";
import cartReducer from "./reducers/cart/cart.reducer";
import categoryReducer from "./reducers/categories/categories.reducer";

const rootReducer = combineReducers({
  userReducer,
  cartReducer,
  categoryReducer,
});

export default rootReducer;
