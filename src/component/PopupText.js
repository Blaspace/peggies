import React from "react";

function PopupText(props) {
  return (
    <div className="status">
      <p>{props.status}</p>
      <button onClick={() => props.setStatus(undefined)}>Okay</button>
    </div>
  );
}

export default PopupText;
