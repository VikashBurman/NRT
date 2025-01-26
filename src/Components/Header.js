import { useContext, useState } from "react";
import foodFireLogo from "../../Images/foodlogo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/" className="title">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    <span className="company-name">Food Fire</span>
  </a>
);



const Header = () => {
  const [btn, setBtn] = useState("Login");
  const isOnline = useOnlineStatus();
  const {loggedInUser}= useContext(UserContext)
  // console.log(loggedInUser);
  
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
         Online Status:{isOnline?"Online":"Offline"}
          </li>
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
            <Link to="/contact">Cart</Link>
          </li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
