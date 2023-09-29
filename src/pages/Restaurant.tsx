import { useEffect, useState } from "react";
import Dropdown from "../components/Dropdown";
import RestaurantCard from "../components/RestaurantCard";
import { Datum, RestaurantList } from "../models/Restaurants";
import axios from "axios";
export default function Restaurant() {
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState<number>(1);
  const [isFilterApplied, setIsFilterApplied] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [restaurants, setRestaurants] = useState<Datum[]>([]);
  useEffect(() => {
    const fetchRestaurants = async () => {
      const options = {
        method: "GET",
        url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants",
        params: {
          locationId: "304554",
          page: page.toString(),
        },
        headers: {
          "X-RapidAPI-Key":
            "e8b1087f7fmsh31e6a1e19ccb543p1b75f9jsn78fa8457118e",
          "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request<RestaurantList>(options);
        setRestaurants((previousData) => [
          ...previousData,
          ...response.data.data.data,
        ]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRestaurants();
  }, [page]);
  const priceDropdownOptions = ["$", "$$", "$$$", "$$$$"];
  const categoriesDropdownOptions = [
    "American",
    "Chinese",
    "Italian",
    "Mexican",
  ];
  const handleIsOpenChange = () => {
    setIsFilterApplied(true);
    setIsOpen(!isOpen);
  };

  const checkRestaurantOpenStatus = (status: string) => {
    if (status === "CLOSED" || status === "CLOSING" || status) {
      return false;
    }
    return true;
  };

  const handleClearFilter = () => {
    setSelectedPrice("");
    setSelectedCategory("");
    setIsOpen(false);
    setIsFilterApplied(false);
  };

  return (
    <div className="w-full h-auto text-black py-mobile md:py-dekstop">
      <div className="px-mobile md:px-dekstop">
        <h1 className="text-4xl font-normal text-center md:text-start">
          Restaurants
        </h1>
        <h2 className="w-full md:w-1/2 text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mollis erat eget ligula pellentesque cursus. Cras at venenatis sapien.
          Proin tincidunt est arcu, ut porttitor justo porta at. Praesent
          pretium nunc nec elit dapibus dignissim sed vel est. Fusce blandit
          ullamcorper est, eget posuere neque posuere et. Nam pellentesque augue
          in ultricies faucibus.
        </h2>
      </div>
      <div className="w-full h-auto border-y border-slate-300 py-4 flex flex-row justify-between items-center px-dekstop my-10">
        <div className="flex flex-row justify-start items-center gap-4 text-sm md:text-base font-normal">
          <p className="hidden md:block">Filter By:</p>
          <label className="border-b h-full border-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={isOpen}
              onChange={handleIsOpenChange}
            />
            <p className="ml-2 inline">Open Now</p>
          </label>
          <Dropdown
            options={priceDropdownOptions}
            handleFunction={(value) => {
              setIsFilterApplied(true);
              setSelectedPrice(value);
            }}
            selectedOption={selectedPrice}
            defaultValue="Price"
          />
          <Dropdown
            options={categoriesDropdownOptions}
            handleFunction={(value) => {
              setIsFilterApplied(true);
              setSelectedCategory(value);
            }}
            selectedOption={selectedCategory}
            defaultValue="Categories"
          />
        </div>
        <button
          className="border-slate-500 border px-7 py-2 disabled:border-slate-300 disabled:text-slate-300"
          disabled={!isFilterApplied}
          onClick={handleClearFilter}
        >
          <p>CLEAR ALL</p>
        </button>
      </div>
      <div className="w-full h-auto px-dekstop">
        <h2 className="text-2xl mb-5">All Restaurant</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {restaurants.map((restaurant, index) => {
            var isShowed: boolean = true;
            if (
              isOpen &&
              !checkRestaurantOpenStatus(restaurant.currentOpenStatusCategory)
            ) {
              isShowed = false;
            }

            var price1;
            var price2;
            if (restaurant.priceTag) {
              const arr = restaurant.priceTag.split(" ");
              if (arr.length === 1) {
                const actualValue = arr[0].length;
                price1 = actualValue;
                price2 = actualValue;
              } else {
                price1 = arr[0].length;
                price2 = arr[2].length;
              }
            }

            if (selectedPrice.length != 0 && price1 && price2) {
              const filterPrice = selectedPrice.length;
              if (filterPrice < price1 || filterPrice > price2)
                isShowed = false;
            }
            if (isShowed) {
              return <RestaurantCard restaurant={restaurant} key={index} />;
            } else {
            }
          })}
        </div>
        <div className="flex flex-row w-full justify-center items-center mt-3">
          <button
            className="border border-blue-900 px-5 py-2"
            onClick={() => setPage((before) => before + 1)}
          >
            <p>LOAD MORE</p>
          </button>
        </div>
      </div>
    </div>
  );
}
