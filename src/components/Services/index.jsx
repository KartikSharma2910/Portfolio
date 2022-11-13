import { BiCheck } from "react-icons/bi";
import "./styles.css";

const project = [
  {
    projectTitle: "Caary Client",
    projectDesc: [
      {
        descOne:
          "● Caary is a progresive financial platform for small and medium size enterprises.",
        descTwo:
          "● Technologies used - React JS , Typescript , HTML 5 , CSS 3 , Material UI, Redux toolkit and Axios.",
        descThree:
          "● Implemented features such as Login , Sign-up , Otp and GOOGLE - Captcha.",
        descFour:
          "● Implemented CRUD API's on the forms and designed searching and sorting auto-complete components.",
      },
    ],
  },
  {
    projectTitle: "Botshot (Marketing)",
    projectDesc: [
      {
        descOne:
          "● ( Product of company ) , which provides ease to the hotel management to manage a contactless Hotel operation like Pre- Check-In and Checkout .",
        descTwo:
          "● Designed pixel perfect navigation bar and footer for the application using Material UI .",
        descThree: "● Designed Cards and Payment pages using HTML 5 and CSS 3.",
        descFour: "● Created all the carousels for the application",
      },
    ],
  },
  {
    projectTitle: "Builder (Microsite) ",
    projectDesc: [
      {
        descOne:
          "● It is an application to help user to bring their Business online in just 10 minutes. User can create their website and customize it according to them.",
        descTwo: "● Designed pixel perfect booking engine for the application.",
        descThree:
          "● Created various components such as , Custom Input , Dropdowns, Auto-complete , Popovers , Modal's and Tooltip using Material UI.",
        descFour: "● Designed pixel perfect Accordians for the application.",
      },
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I have done</h5>
      <h2>Projects</h2>

      <div className="container services__container">
        {project.map(({ projectTitle, projectDesc }, idx) => {
          return (
            <article className="service">
              <div className="service__head">
                <h3>{projectTitle}</h3>
              </div>
              {projectDesc.map(
                ({ descOne, descTwo, descThree, descFour }, idx) => {
                  return (
                    <ul className="service__list">
                      <li>
                        <p>{descOne}</p>
                      </li>
                      <li>
                        <p>{descTwo}</p>
                      </li>
                      <li>
                        <p>{descThree}</p>
                      </li>
                      <li>
                        <p>{descFour}</p>
                      </li>
                    </ul>
                  );
                }
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
