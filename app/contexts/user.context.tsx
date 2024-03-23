"use client";

import { createContext, useState } from "react";
import User from "@typesuser.types";

interface IUserContext {
  currentUser: User | null;
  isAuthenticated: boolean;
  loginUser: (user: User) => void;
  logoutUser: () => void;
}

export const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => {},
  logoutUser: () => {},
});

const UserContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const isAuthenticated = currentUser !== null;

  const loginUser = (user: User) => {
    setCurrentUser(user);
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  return (
    <UserContext.Provider value={{ currentUser, isAuthenticated, loginUser, logoutUser }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
