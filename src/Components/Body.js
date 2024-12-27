import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json) 
    setRestaurantList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };


  if(restaurantList.length === 0 ){
    return <Shimmer/>
  }

  return (
    <div className="body">
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
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
