import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, index) => (
        <div
          key={`${item.id}-${index}`}
          className="py-4 px-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
        >
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-gray-900">{item.name}</h3>

            <p className="text-sm font-semibold text-gray-800 mt-0.5">
              ₹{item.price / 1}
            </p>

            {item.description && (
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>

          <div className="shrink-0">
            <button
              onClick={() => handleAddItems(item)}
              className="px-5 py-2 rounded-xl bg-[#FC8019] hover:bg-[#F97316] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
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
