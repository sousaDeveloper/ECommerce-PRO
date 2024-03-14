const { createBrowserRouter } = require("react-router-dom");

import ExplorePage from "./pages/explore/explore.page";
// Pages
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/signUp/signup.page";

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "register",
    element: <SignUpPage />,
  },
  {
    path: "explore",
    element: <ExplorePage />,
  },
]);

export default router;
