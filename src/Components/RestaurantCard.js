import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData.info.name)
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData.info;
  const {deliveryTime} = resData.info.sla
  // Extract numeric value from the costForTwo string
  const numericCost = parseInt(costForTwo.replace(/[^0-9]/g, ""), 10);

  return (
    <div className="res-card">
      <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="Food Picture" />
      <div className="res-details">
        <h3 className="res-title">{name}</h3>
        <p className="res-cuisine">{cuisines.join(",")}</p>
        <p className="res-cuisine">${numericCost} For Two</p>
        <div className="res-info">
          <span className="res-rating">⭐ {avgRating}</span>
          <span className="res-delivery-time">⏱ {deliveryTime} min</span>
        </div>
      </div>
    </div>
  );
};

export const RestaurantWithLabel = (RestaurantCard) =>{
  return (props)=>{
    return(
      <div>
        {/* <label>OPEN</label> */}
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
