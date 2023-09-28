import { Rating, ThinStar } from "@smastrom/react-rating";
import { Datum } from "../models/Restaurants";
export default function RestaurantCard({ restaurant }: { restaurant: Datum }) {
  const checkRestaurantOpenStatus = (status: string) => {
    if (status === "CLOSED" || status === "CLOSING" || status.length === 0) {
      return false;
    }
    return true;
  };
  return (
    <div className="flex flex-col justify-between gap-5">
      <div className="flex flex-col justify-start w-full gap-2">
        <img className="h-60" src={restaurant.heroImgUrl} alt="" />
        <p className="font-semibold">{restaurant.name}</p>
        <Rating
          className="h-7 w-1/3"
          value={restaurant.averageRating}
          readOnly={true}
          itemStyles={{
            itemShapes: ThinStar,
            activeFillColor: "#1e3a8a",
            itemStrokeWidth: 1,
            activeStrokeColor: "#1e3a8a",
          }}
        />
        <div className="flex flex-row justify-between text-[10px] text-slate-500">
          <div className="flex flex-row justify-start items-center">
            <p>{restaurant.establishmentTypeAndCuisineTags.shift()}</p>
            <div className="w-1 h-1 mx-1 rounded-full bg-black"></div>
            <p>{restaurant.priceTag}</p>
          </div>
          <div className="flex flex-row justify-end items-center">
            <div
              className={`w-2 h-2 rounded-full mr-1 ${
                checkRestaurantOpenStatus(restaurant.currentOpenStatusCategory)
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></div>
            {restaurant.currentOpenStatusCategory.length != 0
              ? restaurant.currentOpenStatusCategory
              : "CLOSED"}
          </div>
        </div>
      </div>
      <button className="w-full bg-blue-900 py-2">
        <p className="text-center text-white text-sm">LEARN MORE</p>
      </button>
    </div>
  );
}
