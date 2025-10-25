import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isNavSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`container ${isNavSticky ? "dark-nav" : ""}`}>
        <img className="logo" src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Programmes</li>
          <li>About Us</li>
          <li>University</li>
          <li>Testimonials</li>
          <li>
            <button className="btn">Contact Us</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
