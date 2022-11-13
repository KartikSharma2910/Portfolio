import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Me from "../Assets/kartik.jpeg";
import "./styles.css";

const data = [
  {
    src: Me,
    name: "Caary Client",
    aechivement:
      "Implemented projects using Agile Scrum methodology , Sprint planning , estimations and Client communication.Worked with UI/UX teams to improve existing applications and increase website conversion rates by 15 - 20%. Implemented CRUD API's on the forms and designed auto-complete components.",
  },
  {
    src: Me,
    name: "Botshot (Marketing)",
    aechivement:
      "Designed and developed mobile and web responsive , pixel perfect pages using Material UI , HTML 5 , CSS 3 and Typescript. Used Jira as bug tracking system to track and maintain bug fixes. It is the product of the company ,which helps in capturing customers to our hotels.",
  },
  {
    src: Me,
    name: "Builder (Microsite)",
    aechivement:
      "It is an application to help user to bring their Business online in just 10 minutes. User can create their website and customize it according to them. Created various components such as , Custom Input , Dropdowns, Auto-complete , Popovers , Modal's and Tooltip using Material UI.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Achievements</h2>
      <Swiper
        className="container testimonials__container"
        autoplay={{
          delay: 1000,
        }}
        pagination
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={40}
      >
        {data.map(({ src, name, aechivement }, idx) => {
          return (
            <SwiperSlide className="testimonial" key={idx}>
              <div className="client__avatar">
                <img src={src} alt="testimonial" />
              </div>
              <h5>{name}</h5>
              <small className="client__review">{aechivement}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
