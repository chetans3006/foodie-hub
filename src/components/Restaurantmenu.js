import { useParams } from "react-router-dom";
import mockData from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const Restaurantmenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [showIndex, setShowIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const res = mockData.find((restaurant) => restaurant.id === id);
      setRestaurant(res);
    }, 1000);
  }, [id]);

  if (restaurant === null) return <Shimmer />;
  if (restaurant === undefined)
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold text-gray-800">
          Restaurant Not Found
        </h1>
      </div>
    );

  return (
    <div className="min-h-screen">
      {/* Restaurant header */}
      <div className="bg-white rounded-3xl shadow-md p-6 sm:p-8 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 truncate">
              {restaurant.name}
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              {restaurant.cuisines.join(", ")}
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1 bg-green-600 text-white px-3 py-1.5 rounded-lg font-bold shadow">
              ★ {restaurant.rating}
            </span>
            {restaurant.deliveryTime && (
              <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg font-semibold">
                ⏱ {restaurant.deliveryTime}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Menu categories */}
      <div className="space-y-4">
        {restaurant.menu.map((category, index) => (
          <RestaurantCategory
            key={category.category}
            data={category}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Restaurantmenu;
