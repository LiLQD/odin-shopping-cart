import { Link, Outlet } from "react-router";
const Product = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <aside>
        <Link to="weapon">Weapons</Link>
        <Link to="armor">Armor</Link>
        <Link to="potion">Potions</Link>
      </aside>
      <Outlet />
    </div>
  );
};
export default Product;
