import { Link, Outlet } from "react-router";
const Product = () => {
  return (
    <div>
      <nav>
        <Link to="weapon">Weapons</Link>
        <Link to="armor">Armor</Link>
        <Link to="potion">Potions</Link>
      </nav>
      <Outlet />
    </div>
  );
};
export default Product;
