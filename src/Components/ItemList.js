const ItemList = ({ items }) => {
    return (
      <div className="item-list">
        {items.map((item) => (
          <div key={item.card.info.id} className="item-card">
            <div className="item-content">
              <h4 className="item-name">{item.card.info.name}</h4>
              <p className="item-price">
                ₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}
              </p>
              <p className="item-description">{item.card.info.description}</p>
            </div>
            <button className="add-button">Add +</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ItemList;
  