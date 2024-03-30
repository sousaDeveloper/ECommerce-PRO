"use client";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";
import { Provider } from "react-redux";

// Utilities
import { auth, db } from "./config/firebase.config";
import { UserContext } from "@contexts/user.context";
import { userConverter } from "@converters/firestore.converters";
import { NextUIProvider } from "@nextui-org/react";

// Components
import HomePage from "./pages/home/page";
import store from "@components/store/store";

export default function Page() {
  const { isAuthenticated, loginUser, logoutUser } = useContext(UserContext);

  onAuthStateChanged(auth, async (user) => {
    const isSigningOut = isAuthenticated && !user;
    if (isSigningOut) {
      return logoutUser();
    }

    const inSigningIn = !isAuthenticated && user;
    if (inSigningIn) {
      const querySnapshot = await getDocs(
        query(collection(db, "users").withConverter(userConverter), where("id", "==", user.uid))
      );

      const userFromFirestore = querySnapshot.docs[0]?.data();

      return loginUser(userFromFirestore);
    }
  });

  return (
    <>
      <Provider store={store}>
        <NextUIProvider>
          <HomePage />
        </NextUIProvider>
      </Provider>
    </>
  );
}
