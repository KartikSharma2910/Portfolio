import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

function HeaderSocial() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kartik-sharma-665b67196/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/KartikSharma2910" target="_blank">
        <FaGithub />
      </a>
      <a href="https://github.com/KartikSharma2910" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
}

export default HeaderSocial;
