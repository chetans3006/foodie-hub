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

  const total = cartItems.reduce((sum, i) => sum + Number(i.price || 0), 0);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Your Cart
        </h1>
        {cartItems.length > 0 && (
          <button
            className="px-4 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-md p-10 text-center">
          <div className="text-6xl mb-3">🛒</div>
          <p className="text-lg font-semibold text-gray-800">
            Your cart is empty.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Add some delicious items to get started.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-4 sm:p-6">
            <ItemList items={cartItems} />
          </div>

          <aside className="bg-white rounded-2xl shadow-md p-6 h-fit">
            <h2 className="text-lg font-bold text-gray-900">Bill Summary</h2>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-700">
                <span>Item total</span>
                <span>₹{total}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Delivery fee</span>
                <span>₹29</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                <span>To pay</span>
                <span>₹{total + 29}</span>
              </div>
            </div>
            <button className="mt-5 w-full py-3 rounded-xl bg-[#FC8019] hover:bg-[#F97316] text-white font-bold shadow-md hover:shadow-lg transition-all duration-300">
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
};

export default Cart;
