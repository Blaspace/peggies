import React from "react";

function ImagePopUp(props) {
  return (
    <>
      {props.image && (
        <div className="pop-image">
          <h1 onClick={() => props.setImage(null)}>&times;</h1>
          <img src={props.image} alt="img" />
        </div>
      )}
    </>
  );
}

export default ImagePopUp;
