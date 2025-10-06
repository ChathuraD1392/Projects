import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./NavBar.css";

const NavBar = () => {
  const [selectedItem, setSelectedItem] = useState("home");
  return (
    <>
      <div className="navbar">
        <img src={assets.logo} alt="compnay-logo" className="logo" />
        <ul className="navbar-menu">
          <li
            className={selectedItem === "home" ? "active" : ""}
            onClick={() => setSelectedItem("home")}
          >
            Home
          </li>
          <li
            className={selectedItem === "menu" ? "active" : ""}
            onClick={() => setSelectedItem("menu")}
          >
            Menu
          </li>
          <li
            className={selectedItem === "mobile-app" ? "active" : ""}
            onClick={() => setSelectedItem("mobile-app")}
          >
            Mobile-App
          </li>
          <li
            className={selectedItem === "contact-us" ? "active" : ""}
            onClick={() => setSelectedItem("contact-us")}
          >
            Contact Us
          </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search-icon" />
          <div className="navbar-bucket-icon">
            <img src={assets.basket_icon} alt="addtocart-icon" />
            <div className="dot"></div>
          </div>
          <button className="login-btn">Sign In</button>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
};

export default NavBar;
