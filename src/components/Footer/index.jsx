import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kartik Sharma
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#service">Service</a>
        </li>
        <li>
          <a href="#testinomial">Testinomial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/">
          <FiInstagram />
        </a>
        <a href="https://www.linkedin.com/">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/">
          <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kartik Sharma All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
