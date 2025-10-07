import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./NavBar.css";
import { Link } from "react-router-dom";

interface Props {
  setShowLogin: (showLogin: boolean) => void;
}

const NavBar = ({ setShowLogin }: Props) => {
  const [selectedItem, setSelectedItem] = useState("home");
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="compnay-logo" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link
            to="/"
            className={selectedItem === "home" ? "active" : ""}
            onClick={() => setSelectedItem("home")}
          >
            Home
          </Link>
          <a
            href="#explore-menu"
            className={selectedItem === "menu" ? "active" : ""}
            onClick={() => setSelectedItem("menu")}
          >
            Menu
          </a>
          <a
            href="#app-download"
            className={selectedItem === "mobile-app" ? "active" : ""}
            onClick={() => setSelectedItem("mobile-app")}
          >
            Mobile-App
          </a>
          <a
            href="#footer-content"
            className={selectedItem === "contact-us" ? "active" : ""}
            onClick={() => setSelectedItem("contact-us")}
          >
            Contact Us
          </a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="search-icon" />
          <Link to="/cart" className="navbar-bucket-icon">
            <img src={assets.basket_icon} alt="addtocart-icon" />
            <div className="dot"></div>
          </Link>
          <button onClick={() => setShowLogin(true)} className="login-btn">
            Sign In
          </button>
        </div>
      </div>
      <hr className="hr" />
    </>
  );
};

export default NavBar;
