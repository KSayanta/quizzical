import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Questions from "./pages/Questions";

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
