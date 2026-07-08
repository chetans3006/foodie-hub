import { IMG_URL } from "../utils/Constants";

const RestaurantCard = ({
  name,
  cuisines,
  deliveryTime,
  rating,
  image,
  cost,
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
          src={image}
          alt={name}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
        {deliveryTime && (
          <span className="absolute bottom-2 left-2 px-2 py-1 rounded-full bg-white/95 text-gray-900 text-xs font-semibold shadow">
            ⏱ {deliveryTime}
          </span>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-gray-900 line-clamp-1">
            {name}
          </h3>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-green-600 text-white text-xs font-bold shadow-sm">
            ★ {rating}
          </span>
        </div>

        <p className="mt-1 text-sm text-gray-600 line-clamp-1">
          {cuisines.join(", ")}
        </p>

        <div className="mt-auto pt-3 flex items-center justify-between text-xs text-gray-500">
          <span className="px-2 py-1 rounded-full bg-gray-100 font-medium">
            {cost ? `₹${cost} for two` : "Delivery available"}
          </span>
          <span className="text-[#FC8019] font-semibold group-hover:underline">
            View menu →
          </span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative h-full">
        <label className="absolute z-10 top-3 left-3 bg-[#FC8019] text-white text-[10px] font-bold uppercase tracking-wide px-2 py-1 rounded-md shadow-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
