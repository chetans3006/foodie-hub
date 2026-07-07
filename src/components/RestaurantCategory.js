import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={setShowIndex}
      >
        <span className="font-bold">
          {data.category} ({data.items.length})
        </span>
        <span>⬇️</span>
      </div>

      {showItems && <ItemList items={data.items} />}
    </div>
  );
};

export default RestaurantCategory;
