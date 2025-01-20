import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDN_URL, MENU_URL } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  // console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    // console.log(json.data);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, imageId } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;
  // console.log(itemCards);
  // console.log(imageId);

  return (
    <>
      <div className="restaurant-details">
        <h2 className="restaurant-name">{name}</h2>
        <h3 className="restaurant-cuisines">{cuisines.join(", ")}</h3>
        <h4 className="restaurant-price">{costForTwoMessage}</h4>
      </div>
      <div className="menu">
        {itemCards.map((item) => (
          <div className="menu-item" key={item.card.info.id}>
            <img
              className="item-image"
              src={CDN_URL + item.card.info.imageId}
            />
            <div className="item-details">
              <h3 className="item-name">{item.card.info.name}</h3>
              <p className="item-price">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
