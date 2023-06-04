import React from "react";
import peggie from "../public/peggie.jpg";

function FourthSection() {
  return (
    <>
      <div className="text-section-four">
        <h2>Our Story</h2>
        <br />
        <p>
          We are peggies events decorations, we make pleasant memories of all
          your events, don't hesitate to call us as we are at your service, dial
          us at <b>09134153272</b> we look forward to your patronage, send us an
          email at <b>peggieseventsdecor@gmail.com</b>, God bless you.
        </p>
      </div>
      <div className="img-section-four">
        <img src={peggie} alt="img" />
      </div>
    </>
  );
}

export default FourthSection;
