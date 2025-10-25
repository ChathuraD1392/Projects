import "./NavBar.css";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menu from "../../assets/menu-icon.png";

const NavBar = () => {
  const [isNavSticky, setSticky] = useState(false);
  const [isHideNav, setHideNav] = useState(true);

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
        <ul className={!isHideNav ? "hide-menu" : ""}>
          <li>
            <Link to="cover" smooth={true} offset={-200} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="programs" smooth={true} offset={-200} duration={500}>
              Programmes
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="university" smooth={true} offset={-200} duration={500}>
              University
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-200} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              className="btn"
              to="contact"
              smooth={true}
              offset={-200}
              duration={800}
            >
              Contact Us
            </Link>
          </li>
        </ul>
        <img
          onClick={() => setHideNav(!isHideNav)}
          className="menu-img"
          src={menu}
          alt="menu"
        />
      </nav>
    </>
  );
};

export default NavBar;
