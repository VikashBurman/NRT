import { useContext, useState } from "react";
import foodFireLogo from "../../Images/foodlogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector,useDispatch } from "react-redux";
import { clearCart } from "../utils/CartSlice";

const Title = () => (
  <a href="/" className="title">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    <span className="company-name">Food Fire</span>
  </a>
);

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const isOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const dispatch = useDispatch();
  // console.log(loggedInUser);
  //what do we need what portion
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Online Status:{isOnline ? "Online" : "Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <button
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
