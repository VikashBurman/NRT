import { useState } from "react";
import foodFireLogo from "../../Images/foodlogo.png";

const Title = () => (
  <a href="/" className="title">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    <span className="company-name">Food Fire</span>
  </a>
);

const Header = () => {
  const [btn, setBtn] = useState("Login");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
