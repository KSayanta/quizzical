import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Questions from "./pages/Quiz";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/quiz",
    Component: Questions,
  },
]);
