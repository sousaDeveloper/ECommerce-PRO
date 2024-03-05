"use client";

import HomePage from "@/pages/home/home.page";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";

export default function Page() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
