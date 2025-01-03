import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json)
    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchText}
          onChange={(e) => {
            //  console.log(e);
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            // console.log(searchText);
            const filteredRestaurant = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
            // console.log(filteredRestaurant)
          }}
        >
          Search
        </button>
      </div>
      <button
        onClick={() => {
          const filteredList = restaurantList.filter(
            (res) => res.info.avgRating > 4.5
          );
          setRestaurantList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
