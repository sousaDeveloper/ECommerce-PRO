"use client";

import { RouterProvider } from "react-router-dom";
import router from "./router.js";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

// Utilities
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { useContext } from "react";
import { userConverter } from "./converters/firestore.converters";

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

  return <RouterProvider router={router} />;
}
