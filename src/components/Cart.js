import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearItem());
  };
  return (
    <div className="text-center m-4 p-4  rounded-lg shadow-md">
      <h1 className="text-2xl font-bold ">Cart</h1>
      <button
        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded text-right"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      <div className="mt-4 w-9/12 mx-auto rounded-lg shadow-md p-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};
export default Cart;
