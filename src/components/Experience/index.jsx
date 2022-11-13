import { BsPatchCheckFill } from "react-icons/bs";
import "./styles.css";

const skills = [
  {
    skill: "HTML 5",
    efficency: "Experienced",
  },
  {
    skill: "CSS 3",
    efficency: "Experienced",
  },
  {
    skill: "JavaScript",
    efficency: "Experienced",
  },
  {
    skill: "TypeScript",
    efficency: "Experienced",
  },
  {
    skill: "React JS",
    efficency: "Experienced",
  },
  {
    skill: "Material UI",
    efficency: "Experienced",
  },
  {
    skill: "Redux Toolkit",
    efficency: "Experienced",
  },
  {
    skill: "SCSS",
    efficency: "Experienced",
  },
];

const CoreSkills = [
  {
    skill: "C",
    efficency: "Experienced",
  },
  {
    skill: "C++",
    efficency: "Experienced",
  },
  {
    skill: "Git",
    efficency: "Experienced",
  },
  {
    skill: "Rest API",
    efficency: "Experienced",
  },
  {
    skill: "Data Structure",
    efficency: "Experienced",
  },
  {
    skill: "Algorithms",
    efficency: "Experienced",
  },
  {
    skill: "Jira",
    efficency: "Experienced",
  },
  {
    skill: "Client Communication",
    efficency: "Experienced",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {skills.map(({ skill, efficency }, idx) => {
              return (
                <article className="experience__details" key={idx}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{efficency}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Core Skills</h3>
          <div className="experience__content">
            {CoreSkills.map(({ skill, efficency }, idx) => {
              return (
                <article className="experience__details" key={idx}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{efficency}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
