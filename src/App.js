import React from "react";
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  NavBar,
  Services,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <NavBar />
      <About />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
