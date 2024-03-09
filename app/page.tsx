"use client";

import { RouterProvider } from "react-router-dom";
import router from "./router.js";
import { onAuthStateChanged } from "firebase/auth";

// Utilities
import { auth } from "./config/firebase.config";

export default function Page() {
  onAuthStateChanged(auth, (user) => {
    console.log(user);
  });
  return <RouterProvider router={router} />;
}
