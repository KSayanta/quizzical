import {
  createBrowserRouter,
  type DOMRouterOpts,
  type RouteObject,
} from "react-router";
import Home, { loader as homeLoader } from "./pages/Home";
import Quiz from "./pages/Quiz";
import ErrorElement from "./pages/ErrorElement";
import PageNotFound from "./pages/PageNotFound";

const opts: DOMRouterOpts = {
  basename: "/quizzical",
};

const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <ErrorElement />,

    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },

      {
        path: "quiz",
        element: <Quiz />,
      },
    ],
  },

  {
    path: "*",
    element: <PageNotFound />,
  },
];

export const router = createBrowserRouter(routes, opts);
