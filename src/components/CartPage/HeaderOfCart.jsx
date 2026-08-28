import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const HeaderOfCart = () => {
  const productsTotalPrice = useSelector(
    (state) => state.cart.productsTotalPrice,
  );
  return (
    <div className="flex items-center gap-2 px-6 dark:text-white/80">
      <FaShoppingCart />
      <p>Subtotal: ${productsTotalPrice.toLocaleString("en")}</p>
    </div>
  );
};

export default HeaderOfCart;
