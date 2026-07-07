import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-4 border-b border-gray-200 flex justify-between items-center"
        >
          {/* Item Details */}
          <div className="w-9/12">
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-sm text-gray-600">₹{item.price / 1}</p>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>

          {/* Add Button */}
          <div className="w-3/12 flex justify-center">
            <button
              className="bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => handleAddItems(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
