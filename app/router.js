const { createBrowserRouter } = require("react-router-dom");

// Pages
import HomePage from "./pages/home/home.page";
import LoginPage from "./pages/login/login.page";

const router = createBrowserRouter([
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export default router;
