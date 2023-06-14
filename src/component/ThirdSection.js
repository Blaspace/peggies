import React, { useState } from "react";
import img1 from "../public/image-6.jpg";
import img2 from "../public/image-7.jpg";
import img3 from "../public/image-8.jpg";
import img4 from "../public/image-5.jpg";
import img5 from "../public/image-4.jpg";
import img6 from "../public/image-3.jpg";
import img7 from "../public/image-2.jpg";
import img8 from "../public/image-1.jpg";
import img11 from "../public/image-10.jpg";
import img10 from "../public/image-11.jpg";
import img12 from "../public/image-12.jpg";
import img13 from "../public/bg-header.jpg";

import ImagePopUp from "./ImagePopUp";

function ThirdSection() {
  const [gallery, setGallery] = useState(false);
  const [image, setImage] = useState(null);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img8,
    img7,
    img10,
    img11,
    img12,
    img13,
  ];
  const handlePop = (e) => {
    setImage(e);
  };

  return (
    <div className="gallery-con">
      {!gallery ? (
        <>
          <div className="third-section">
            {images.map((value) => {
              return (
                <div key={value}>
                  <img
                    src={value}
                    alt="img"
                    key={value}
                    onClick={() => handlePop(value)}
                  />
                </div>
              );
            })}
          </div>
          <button onClick={() => setGallery(true)}>see all image</button>
        </>
      ) : (
        <>
          <div className="gallery">
            {images.map((value) => {
              return (
                <div key={value}>
                  <img src={value} alt="img" onClick={() => handlePop(value)} />
                </div>
              );
            })}
          </div>
          <button onClick={() => setGallery(false)}>see less</button>
        </>
      )}
      <ImagePopUp image={image} setImage={setImage} />
    </div>
  );
}

export default ThirdSection;
