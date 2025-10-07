import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content" id="footer-content">
          <div className="footer-right">
            <img src={assets.logo} alt="logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ex
              quia officia excepturi sint aliquam asperiores tempora error
              repudiandae laudantium soluta quod saepe tenetur maiores quae
              dignissimos eos. Pariatur nostrum vitae expedita totam laboriosam
              mollitia quas incidunt veniam impedit! Aliquid sit earum ipsam ex
              odio mollitia dolor voluptate fugit repellat!
            </p>
            <div className="social-media-icons">
              <img src={assets.facebook_icon} alt="facebook" />
              <img src={assets.linkedin_icon} alt="linkedin" />
              <img src={assets.twitter_icon} alt="twitter" />
            </div>
          </div>
          <div className="footer-center">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Delivary</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-left">
            <h2>Get In Touch</h2>
            <ul>
              <li>+94 70 1871 461</li>
              <li>info@tomato.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="footer-copyright">
          Copyright 2025 @ Tomato.com - All Right Reserved{" "}
        </p>
      </div>
    </>
  );
};

export default Footer;
