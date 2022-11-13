import Me from "../Assets/kartik.jpeg";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kartik Sharma</h1>
        <h5 className="text-light">React JS developer</h5>
        <CTA />
        <HeaderSocial />
        <div>
          <img src={Me} alt="my photo" className="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
