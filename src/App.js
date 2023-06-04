import React from "react";
import ContactForm from "./component/ContactForm";
import FirstSection from "./component/FirstSection";
import Footer from "./component/Footer";
import FourthSection from "./component/FourthSection";
import Header from "./component/Header";
import Nav from "./component/Nav";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";

function App() {
  return (
    <>
      <div className="header-nav">
        <Nav />
        <Header />
      </div>
      <div>
        <a name="first" href="#" />
        <FirstSection />
      </div>
      <div className="second-section">
        <a name="second" href="#" />
        <SecondSection />
      </div>
      <div className="third-con">
        <a name="third" href="#" />
        <h2>Our Galary</h2>
        <ThirdSection />
      </div>
      <div className="fourth-section">
        <a name="fourth" href="#" />
        <FourthSection />
      </div>
      <div className="fifth-section">
        <a name="fifth" href="#" />
        <ContactForm />
      </div>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
