import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  // const {loggedInUser} = useContext(UserContext);
  

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, imageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return (
    <>
      {/* <h2>{loggedInUser}</h2> */}
      {categories?.map((category, index) => (
        <RestaurantCategory
          key={index}
          showItem={index === showIndex ? true : false}
          data={category?.card?.card}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </>
  );
};

export default RestaurantMenu;
