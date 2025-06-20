import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Questions from "./pages/Quiz";
import ErrorElement from "./pages/ErrorElement";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <PageNotFound />,
  },
  {
    path: "/quiz",
    Component: Questions,
    errorElement: <ErrorElement />,
  },
]);
