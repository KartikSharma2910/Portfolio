import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { GiTechnoHeart } from "react-icons/gi";
import Me from "../Assets/kartik.jpeg";
import "./styles.css";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div>
            <img src={Me} alt="my photo" className="about__me-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Exprience</h5>
              <small>1+ Years</small>
            </article>
            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Projects Completed</small>
            </article>
            <article className="about__card">
              <GiTechnoHeart className="about__icon" />
              <h5>Technology</h5>
              <small>React JS and Next JS</small>
            </article>
          </div>
          <p>
            A hardworking developer with proven leadership and organisational
            skills and minute attention to detail. I am a dedicated team player
            who can be relied upon to help your company achieve its goals.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
