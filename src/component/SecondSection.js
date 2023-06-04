import React from "react";
import image1 from "../public/image-11.jpg";
import image2 from "../public/image-10.jpg";
import image3 from "../public/image-3.jpg";
import image4 from "../public/image-12.jpg";

function SecondSection() {
  return (
    <>
      <div className="first-row">
        <div className="cardA">
          <div className="card-img">
            <img src={image1} alt="img" />
          </div>
          <section>
            <h3>Birthday parties</h3>
            <p>
              Birthdays are special moments and we would love to capture them
              for you, making it a pleasant memory
            </p>
          </section>
        </div>
        <div className="cardB">
          <div className="card-img">
            <img src={image2} alt="img" />
          </div>
          <section>
            <h3>Cooperate events</h3>
            <br />
            <p>
              Being Cooperate doesn't stop you from being classic, let's make
              your environment comfortable for you
            </p>
          </section>
        </div>
      </div>
      <div className="second-row">
        <div className="cardB">
          <div className="card-img">
            <img src={image3} alt="img" />
          </div>
          <section>
            <h3>Wedding events</h3>
            <br />
            <p> We offer full coverage of the wedding decoration.</p>
          </section>
        </div>
        <div className="cardA">
          <div className="card-img">
            <img src={image4} alt="img" />
          </div>
          <section>
            <h3>Dinners and More</h3>
            <br />
            <p> Get-togethers are most memorable when the space is beautiful</p>
          </section>
        </div>
      </div>
    </>
  );
}

export default SecondSection;
