import { useEffect, useState } from "react";
import foodFireLogo from "../../Images/foodlogo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/" className="title">
    <img className="logo" src={foodFireLogo} alt="Food Fire Logo" />
    <span className="company-name">Food Fire</span>
  </a>
);

const Header = () => {
  const [btn, setBtn] = useState("Login");
  // console.log("header renders")
  // useEffect(()=>{
  //   console.log("useffect called");
  // },[])

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
