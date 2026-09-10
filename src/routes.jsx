import Home from "./Home";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Product from "./Product";
import Category from "./Category";
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Product />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":category",
        element: <Category />,
      },
    ],
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
export default routes;
