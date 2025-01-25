import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div className="restaurant-category">
      <h3 className="category-header" onClick={handleClick}>
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <span>&#9662;</span>
      </h3>
      {showItem && (
        <div className="items-container">
          <ItemList items={data.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
