"use client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useContext } from "react";

// Utilities
import { auth, db } from "./config/firebase.config";
import { UserContext } from "./contexts/user.context";
import { userConverter } from "./converters/firestore.converters";

// Pages
import HomePage from "./pages/home/page";
import CategoryDetailsPage from "./pages/category/page";
import PaymentConfirmation from "./payment-confirmation/page";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryDetailsPage />} />
          <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
