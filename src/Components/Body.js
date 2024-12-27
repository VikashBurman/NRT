import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restList, setRestList] = useState(restaurantList);

  return (
    <div className="body">
      <button
        onClick={() => {
          const filteredList = restList.filter((res) => res.data.avgRating > 4.2  );
          setRestList(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {restList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
