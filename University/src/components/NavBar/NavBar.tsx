import "./NavBar.css";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <>
      <nav className="container">
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
