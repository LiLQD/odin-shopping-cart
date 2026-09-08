import Home from "./Home";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Product from "./Product";
const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
];
export default routes;
