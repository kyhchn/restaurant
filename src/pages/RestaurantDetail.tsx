import { useParams } from "react-router-dom";
import { Restaurant } from "../models/Restaurant";
import { Rating, ThinStar } from "@smastrom/react-rating";
import "swiper/css";
export default function RestaurantDetail() {
  const { id } = useParams();
  const restaurant: Restaurant = {
    status: true,
    message: "Success",
    timestamp: 1665486760272,
    data: {
      location: {
        location_id: "8010527",
        name: "Saptami",
        latitude: "19.103235",
        longitude: "72.88693",
        num_reviews: "720",
        timezone: "Asia/Kolkata",
        location_string: "Mumbai, Maharashtra",
        awards: [],
        doubleclick_zone: "as.india.mumbai",
        preferred_map_engine: "default",
        raw_ranking: "4.900440216064453",
        ranking_geo: "Mumbai",
        ranking_geo_id: "304554",
        ranking_position: "2",
        ranking_denominator: "9260",
        ranking_category: "restaurant",
        ranking: "#2 of 14,721 places to eat in Mumbai",
        distance: null,
        distance_string: null,
        bearing: null,
        rating: "5.0",
        is_closed: false,
        open_now_text: "Open Now",
        is_long_closed: false,
        price_level: "$$$$",
        price: "$1,200 - $2,000",
        neighborhood_info: [
          {
            location_id: "15621370",
            name: "Eastern Suburbs",
          },
          {
            location_id: "15621447",
            name: "Sakinaka",
          },
          {
            location_id: "15621471",
            name: "Western Suburbs",
          },
        ],
        description:
          "Saptami - our all day dining restaurant offers authentic cuisines with efficient service and local knowledge. Saptami offers a plethora of cuisines like Indian, Continental, Oriental etc. It is close to both the terminals and north Mumbai business hubs with the international airport at 1.2 km and domestic airport at 5 km.",
        web_url:
          "https://www.tripadvisor.com/Restaurant_Review-g304554-d8010527-Reviews-Saptami-Mumbai_Maharashtra.html",
        write_review:
          "https://www.tripadvisor.com/UserReview-g304554-d8010527-Saptami-Mumbai_Maharashtra.html",
        ancestors: [
          {
            subcategory: [
              {
                key: "city",
                name: "City",
              },
            ],
            name: "Mumbai",
            abbrv: null,
            location_id: "304554",
          },
          {
            subcategory: [
              {
                key: "state",
                name: "State",
              },
            ],
            name: "Maharashtra",
            abbrv: null,
            location_id: "297648",
          },
          {
            subcategory: [
              {
                key: "country",
                name: "Country",
              },
            ],
            name: "India",
            abbrv: null,
            location_id: "293860",
          },
        ],
        category: {
          key: "restaurant",
          name: "Restaurant",
        },
        subcategory: [
          {
            key: "sit_down",
            name: "Sit down",
          },
        ],
        parent_display_name: "Mumbai",
        is_jfy_enabled: false,
        nearest_metro_station: [],
        website:
          "http://www.holidayinn.com/hotels/us/en/mumbai/bomap/hoteldetail/dining",
        email: "saptami@himia.in",
        address_obj: {
          street1:
            "Holiday Inn Hotel, Lobby Level, Saki Naka Junction, Andheri Kurla Road, Andheri East",
          street2: null,
          city: "Mumbai",
          state: "Maharashtra",
          country: "India",
          postalcode: "400072",
        },
        address:
          "Holiday Inn Hotel, Lobby Level, Saki Naka Junction, Andheri Kurla Road, Andheri East, Mumbai 400072 India",
        hours: {
          week_ranges: [
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
            [
              {
                open_time: 420,
                close_time: 1410,
              },
            ],
          ],
          timezone: "Asia/Kolkata",
        },
        is_candidate_for_contact_info_suppression: false,
        cuisine: [
          {
            key: "10346",
            name: "Indian",
          },
          {
            key: "10659",
            name: "Asian",
          },
          {
            key: "10679",
            name: "Healthy",
          },
          {
            key: "10648",
            name: "International",
          },
          {
            key: "10665",
            name: "Vegetarian Friendly",
          },
          {
            key: "10697",
            name: "Vegan Options",
          },
          {
            key: "10751",
            name: "Halal",
          },
          {
            key: "10992",
            name: "Gluten Free Options",
          },
        ],
        dietary_restrictions: [
          {
            key: "10665",
            name: "Vegetarian Friendly",
          },
          {
            key: "10697",
            name: "Vegan Options",
          },
          {
            key: "10751",
            name: "Halal",
          },
          {
            key: "10992",
            name: "Gluten Free Options",
          },
        ],
        photo: {
          id: "341762257",
          caption:
            "Saptami - A contemporary multi-cuisine all day dining restaurant ",
          published_date: "2018-08-29T01:59:06-0400",
          helpful_votes: "1",
          is_blessed: false,
          uploaded_date: "2018-08-29T01:59:06-0400",
          images: {
            small: {
              url: "https://media-cdn.tripadvisor.com/media/photo-l/14/5e/e0/d1/saptami-a-contemporary.jpg",
              width: "150",
              height: "150",
            },
            thumbnail: {
              url: "https://media-cdn.tripadvisor.com/media/photo-t/14/5e/e0/d1/saptami-a-contemporary.jpg",
              width: "50",
              height: "50",
            },
            original: {
              url: "https://media-cdn.tripadvisor.com/media/photo-o/14/5e/e0/d1/saptami-a-contemporary.jpg",
              width: "5616",
              height: "3744",
            },
            large: {
              url: "https://media-cdn.tripadvisor.com/media/photo-s/14/5e/e0/d1/saptami-a-contemporary.jpg",
              width: "550",
              height: "367",
            },
            medium: {
              url: "https://media-cdn.tripadvisor.com/media/photo-f/14/5e/e0/d1/saptami-a-contemporary.jpg",
              width: "250",
              height: "167",
            },
          },
        },
        tags: null,
        display_hours: [
          {
            days: "Sun - Sat",
            times: ["7:00 AM - 11:30 PM"],
          },
        ],
      },
      hours: {
        openStatus: "OPEN",
        openStatusText: "Open Now",
        hoursTodayText: "Hours Today: 7:00 AM - 11:30 PM",
        currentHoursText: "7:00 AM - 11:30 PM",
        allOpenHours: [
          {
            days: "Sun - Sat",
            times: ["7:00 AM - 11:30 PM"],
          },
        ],
        addHoursLink: {
          url: "/UpdateListing-d8010527#Hours-only",
          text: "+ Add hours",
        },
      },
      ownerStatus: {
        isVerified: true,
        isMemberOwner: false,
        isUserInCountry: false,
      },
      ownerLikelihood: {
        isOwner: false,
        likelihood: "LOW",
      },
      overview: {
        name: "Saptami, India",
        detailId: 8010527,
        geo: "Mumbai, India",
        geoId: 304554,
        isOwner: false,
        links: {
          warUrl:
            "/UserReviewEdit-g304554-d8010527-Saptami-Mumbai_Maharashtra.html",
          addPhotoUrl: "/PostPhotos-g304554-d8010527",
          ownerAddPhotoUrl: "/ManagePhotos-d8010527-Saptami",
        },
        location: {
          latitude: 19.103235,
          longitude: 72.88693,
          directionsUrl:
            "U09sX2h0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/c2FkZHI9JmRhZGRyPUhvbGlkYXkrSW5uK0hvdGVsJTJDK0xvYmJ5K0xldmVsJTJDK1Nha2krTmFrYStKdW5jdGlvbiUyQytBbmRoZXJpK0t1cmxhK1JvYWQlMkMrQW5kaGVyaStFYXN0JTJDK011bWJhaSs0MDAwNzIrSW5kaWFAMTkuMTAzMjM1LDcyLjg4NjkzX1NUNw==",
          landmark: "<b>2.1 miles</b> from Powai Lake",
          neighborhood: "Eastern Suburbs",
        },
        contact: {
          address:
            "Holiday Inn Hotel, Lobby Level, Saki Naka Junction, Andheri Kurla Road, Andheri East, Mumbai 400072 India",
          email: "saptami@himia.in",
          phone: null,
          website:
            "djR0X2h0dHA6Ly93d3cuaG9saWRheWlubi5jb20vaG90ZWxzL3VzL2VuL211bWJhaS9ib21hcC9ob3RlbGRldGFpbC9kaW5pbmdfM1dK",
        },
        rating: {
          primaryRanking: {
            rank: 2,
            totalCount: 8574,
            category: "Restaurants",
            geo: "Mumbai",
            url: "/Restaurants-g304554-Mumbai_Maharashtra.html",
          },
          secondaryRanking: null,
          primaryRating: 5,
          reviewCount: 720,
          ratingQuestions: [
            {
              name: "Food",
              rating: 45,
              icon: "restaurants",
            },
            {
              name: "Service",
              rating: 40,
              icon: "bell",
            },
            {
              name: "Value",
              rating: 40,
              icon: "wallet-fill",
            },
            {
              name: "Atmosphere",
              rating: 40,
              icon: "ambience",
            },
          ],
        },
        award: {
          icon: "travelers-choice-badge",
          awardText: "Travelers' Choice",
          yearsText: "",
          isTravelersChoice: false,
        },
        tags: {
          reviewSnippetSections: null,
        },
        detailCard: {
          tagTexts: {
            priceRange: {
              tagCategoryId: 240,
              tags: [
                {
                  tagId: 10954,
                  tagValue: "Fine Dining",
                },
              ],
            },
            cuisines: {
              tagCategoryId: 231,
              tags: [
                {
                  tagId: 10346,
                  tagValue: "Indian",
                },
                {
                  tagId: 10659,
                  tagValue: "Asian",
                },
                {
                  tagId: 10679,
                  tagValue: "Healthy",
                },
                {
                  tagId: 10648,
                  tagValue: "International",
                },
              ],
            },
            dietaryRestrictions: {
              tagCategoryId: 285,
              tags: [
                {
                  tagId: 10665,
                  tagValue: "Vegetarian Friendly",
                },
                {
                  tagId: 10697,
                  tagValue: "Vegan Options",
                },
                {
                  tagId: 10751,
                  tagValue: "Halal",
                },
                {
                  tagId: 10992,
                  tagValue: "Gluten Free Options",
                },
              ],
            },
            meals: {
              tagCategoryId: 233,
              tags: [
                {
                  tagId: 10597,
                  tagValue: "Breakfast",
                },
                {
                  tagId: 10598,
                  tagValue: "Lunch",
                },
                {
                  tagId: 10599,
                  tagValue: "Dinner",
                },
                {
                  tagId: 10606,
                  tagValue: "Brunch",
                },
                {
                  tagId: 10704,
                  tagValue: "Late Night",
                },
                {
                  tagId: 10949,
                  tagValue: "Drinks",
                },
              ],
            },
            features: {
              tagCategoryId: 234,
              tags: [
                {
                  tagId: 10601,
                  tagValue: "Takeout",
                },
                {
                  tagId: 10602,
                  tagValue: "Reservations",
                },
                {
                  tagId: 10702,
                  tagValue: "Private Dining",
                },
                {
                  tagId: 10852,
                  tagValue: "Seating",
                },
                {
                  tagId: 10854,
                  tagValue: "Parking Available",
                },
                {
                  tagId: 10856,
                  tagValue: "Validated Parking",
                },
                {
                  tagId: 10857,
                  tagValue: "Valet Parking",
                },
                {
                  tagId: 10860,
                  tagValue: "Highchairs Available",
                },
                {
                  tagId: 10861,
                  tagValue: "Wheelchair Accessible",
                },
                {
                  tagId: 10862,
                  tagValue: "Serves Alcohol",
                },
                {
                  tagId: 10863,
                  tagValue: "Full Bar",
                },
                {
                  tagId: 16547,
                  tagValue: "Table Service",
                },
                {
                  tagId: 10612,
                  tagValue: "Buffet",
                },
                {
                  tagId: 10864,
                  tagValue: "Wine and Beer",
                },
                {
                  tagId: 20992,
                  tagValue: "Drive Thru",
                },
                {
                  tagId: 21271,
                  tagValue: "Family style",
                },
              ],
            },
            establishmentType: {
              tagCategoryId: 230,
              tags: [
                {
                  tagId: 10591,
                  tagValue: "Restaurants",
                },
              ],
            },
          },
          numericalPrice: "$15 - $24",
          improveListingUrl: "/ImproveListing-d8010527.html",
          updateListingUrl:
            "/ManageListing-g304554-d8010527-Saptami-Mumbai_Maharashtra.html",
          restaurantOwner: {
            text: null,
            tooltip: null,
            trackingItemName: "",
          },
        },
      },
    },
  };
  return (
    <div className="w-full h-auto p-dekstop">
      <h1>{restaurant.data.location.name}</h1>
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

      <p>{restaurant.data.location.description}</p>
    </div>
  );
}
