import User from "@typesuser.types";

interface InitialState {
  currentUser: User | null;
  isAuthenticated: boolean;
}

const initialState: InitialState = {
  currentUser: null,
  isAuthenticated: false,
};

export default function userReducer(state = initialState, action: any) {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, currentUser: action.payload, isAuthenticated: true };
    case "LOGOUT_USER":
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
      };
    default:
      return {
        ...state,
      };
  }
}
