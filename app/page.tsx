"use client";

import { RouterProvider } from "react-router-dom";
import router from "./router.js";

export default function Page() {
  return <RouterProvider router={router} />;
}
