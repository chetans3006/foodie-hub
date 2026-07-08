import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <button
        type="button"
        className="w-full flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition"
        onClick={setShowIndex}
      >
        <span className="font-bold text-gray-900 text-base sm:text-lg">
          {data.category}{" "}
          <span className="text-gray-500 font-medium">
            ({data.items.length})
          </span>
        </span>
        <span
          className={`text-[#FC8019] text-xl transition-transform duration-300 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </button>

      {showItems && (
        <div className="border-t border-gray-100 px-2 sm:px-4">
          <ItemList items={data.items} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
