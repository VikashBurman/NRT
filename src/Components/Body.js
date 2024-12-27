import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restList, setRestList] = useState([]);

  // if(restList.length === 0 ){
  //   return <Shimmer/>
  // }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json) 
    setRestList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  };

  return (
    <div className="body">
      <button
        onClick={() => {
          const filteredList = restList.filter(
            (res) => res.data.avgRating > 4.2
          );
          setRestList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {restList.map((restaurant) => (
          <RestaurantCard   resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
