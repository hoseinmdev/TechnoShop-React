import { Link } from "react-router-dom";
import emptyCart from "../../assets/images/empty-shopping-trolley.png";

const EmptyCart = () => {
  return (
    <div className="W-11/12  flex flex-col items-center justify-center gap-8 rounded-xl border border-gray-300 p-4 dark:border-none">
      <img className="w-56" src={emptyCart} alt="Your cart is empty"></img>
      <p className="text-lg text-gray-600 dark:text-white/80">
        Your cart is empty :(
      </p>
      <Link to="/">
        <button className="flex w-80 items-center justify-center rounded-full bg-violet-700 px-4 py-2 text-white">
          Go to homepage
        </button>
      </Link>
    </div>
  );
};

export default EmptyCart;
