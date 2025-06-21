import { createBrowserRouter } from "react-router";
import Home, { loader as homeLoader } from "./pages/Home";
import Quiz from "./pages/Quiz";
import ErrorElement from "./pages/ErrorElement";
import PageNotFound from "./pages/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: PageNotFound,
  },
  {
    path: "/quizzical",
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: "quiz",
        Component: Quiz,
      },
    ],
  },
]);
