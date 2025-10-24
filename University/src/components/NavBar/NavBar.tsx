import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Programmes</li>
          <li>About Us</li>
          <li>University</li>
          <li>Testimonials</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
