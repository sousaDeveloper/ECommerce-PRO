const { createBrowserRouter } = require("react-router-dom");

// Pages
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";
import SignUpPage from "./pages/signUp/signup.page";
import ExplorePage from "./pages/explore/explore.page";
import CategoryDetailsPage from "./pages/categoryDetails/categoryDetails.page";

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
  {
    path: "category/:id",
    element: <CategoryDetailsPage />,
  },
]);

export default router;
