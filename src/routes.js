import Home from "./Home";
import Shop from "./Shop";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
export const routes = [
  {
    path: "/",
    element: <Home />,
    errorPage: <ErrorPage />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
