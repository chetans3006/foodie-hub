import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import mockData from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

const Body = () => {
  const [allRestaurants] = useState(mockData);
  const [listofRestaurants, setListofRestaurants] = useState(mockData);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleSearch = () => {
    const filtered = allRestaurants.filter((res) =>
      res.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setListofRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = allRestaurants.filter((res) => Number(res.rating) > 4);
    setListofRestaurants(filtered);
  };

  const handleReset = () => {
    setListofRestaurants(allRestaurants);
    setSearchText("");
  };

  if (!onlineStatus) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800">
          🔴 You are offline, please check your internet connection!
        </h1>
      </div>
    );
  }

  if (!listofRestaurants.length) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#FC8019] to-[#F97316] text-white p-6 sm:p-10 mb-8 shadow-lg">
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
            Hungry? We've got you covered.
          </h1>
          <p className="mt-2 text-white/90 text-sm sm:text-base">
            Order from the best restaurants near you — fast delivery, great
            taste.
          </p>
        </div>
        <div className="absolute -right-8 -bottom-8 text-[120px] sm:text-[180px] opacity-20 select-none">
          🍔
        </div>
      </section>

      {/* Search + Filters */}
      <section className="bg-white rounded-2xl shadow-md p-4 sm:p-5 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4">
          <div className="flex flex-1 items-center gap-2 bg-[#F8F8F8] border border-gray-200 rounded-full px-4 py-2 focus-within:border-[#FC8019] transition">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-400"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-1.5 rounded-full bg-[#FC8019] hover:bg-[#F97316] text-white text-sm font-semibold shadow transition-all duration-300"
            >
              Search
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 bg-white hover:bg-[#FC8019] hover:text-white hover:border-[#FC8019] shadow-sm transition-all duration-300"
              onClick={handleTopRated}
            >
              ⭐ Top Rated
            </button>
            <button
              className="px-4 py-2 rounded-full text-sm font-semibold border border-gray-200 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 shadow-sm transition-all duration-300"
              onClick={handleReset}
            >
              Reset
            </button>

            <div className="flex items-center gap-2 ml-0 sm:ml-2">
              <label className="text-xs font-semibold text-gray-600">
                User:
              </label>
              <input
                type="text"
                className="border border-gray-200 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:border-[#FC8019]"
                value={loggedInUser || ""}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section title */}
      <div className="flex items-baseline justify-between mb-4 px-1">
        <h2 className="text-lg sm:text-xl font-extrabold text-gray-900">
          Restaurants near you
        </h2>
        <span className="text-xs sm:text-sm text-gray-500">
          {listofRestaurants.length} places
        </span>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {listofRestaurants.map((restaurant) => (
          <Link
            key={restaurant.id}
            to={"/restaurants/" + restaurant.id}
            className="block"
          >
            {restaurant.promoted ? (
              <PromotedRestaurantCard {...restaurant} />
            ) : (
              <RestaurantCard {...restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
