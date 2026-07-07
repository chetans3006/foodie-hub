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

  if (restaurant === null) {
    return <Shimmer />;
  }

  if (restaurant === undefined) {
    return <h1>Restaurant Not Found</h1>;
  }

  return (
    <div className=" bg-gray-50 min-h-screen p-4 ">
      <div className="flex items-center justify-center gap-3">
        <h1 className="text-3xl font-bold">{restaurant.name}</h1>
        <span className="bg-green-600 text-white px-2 py-1 rounded-md shadow-lg">
          ⭐ {restaurant.rating}
        </span>

        <span className="text-gray-600">{restaurant.cuisines.join(", ")}</span>
      </div>

      {restaurant.menu.map((category, index) => (
        <RestaurantCategory
          key={category.category}
          data={category}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;
