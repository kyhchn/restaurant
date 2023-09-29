import { useParams } from "react-router-dom";
import { Restaurant } from "../models/Restaurant";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import axios from "axios";
export default function RestaurantDetail() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState<Restaurant>();
  useEffect(() => {
    const fetchData = async () => {
      const fixId = id!.replace(".html", "");
      const options = {
        method: "GET",
        url: "https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/getRestaurantDetails",
        params: {
          restaurantsId: fixId,
          currencyCode: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "e8b1087f7fmsh31e6a1e19ccb543p1b75f9jsn78fa8457118e",
          "X-RapidAPI-Host": "tripadvisor16.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setRestaurant(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-full h-auto p-dekstop">
      {restaurant && (
        <>
          <h1 className="text-4xl font-semibold">{restaurant.data.location.name}</h1>
          <Rating
            className="h-10 w-32"
            value={restaurant.data.overview.rating.primaryRating}
            readOnly={true}
            itemStyles={{
              itemShapes: ThinStar,
              activeFillColor: "#1e3a8a",
              itemStrokeWidth: 1,
              activeStrokeColor: "#1e3a8a",
            }}
          />
          <p>{restaurant.data.location.address}</p>
          <iframe
            src={`//maps.google.com/maps?q=${restaurant.data.location.latitude},${restaurant.data.location.longitude}&z=15&output=embed`}
          ></iframe>
          <p>{restaurant.data.location.description}</p>
        </>
      )}
    </div>
  );
}
