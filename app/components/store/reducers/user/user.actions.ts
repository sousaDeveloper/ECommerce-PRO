import User from "@typesuser.types";
import UserActionTypes from "./user.action-types";

export const loginUser = (payload: User) => ({
  type: UserActionTypes.LOGIN,
  payload: payload,
});

export const logoutUser = () => ({
  type: UserActionTypes.LOGOUT,
});
