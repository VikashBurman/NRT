const RestaurantCard = (props) => {
    // console.log(props);
    const {resData} = props;
    const{cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData?.data;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
          alt="Meghana Food"
        />
        <div className="res-details">
          <h3 className="res-title">{name}</h3>
          <p className="res-cuisine">{cuisines.join(",")}</p>
          <p className="res-cuisine">${costForTwo/100} For Two</p>
          <div className="res-info">
            <span className="res-rating">⭐ {avgRating}</span>
            <span className="res-delivery-time">⏱ {deliveryTime}</span>
          </div>
        </div>
      </div>
    );
  };

  export default RestaurantCard;