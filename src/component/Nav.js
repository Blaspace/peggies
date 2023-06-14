import React from "react";
import { useState } from "react";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    toggle === false ? setToggle(true) : setToggle(false);
  };
  return (
    <>
      <nav className="nav">
        <div>
          <h2>Peggy Adugba</h2>
        </div>
        <ul>
          <a href="#first">
            <li>About Us</li>
          </a>
          <a href="#second">
            <li>Our Service</li>
          </a>
          <a href="#third">
            <li>Galary</li>
          </a>
          <a href="#fourth">
            <li>Our Story</li>
          </a>
          <a href="#fifth">
            <li>Contact Us </li>
          </a>
        </ul>
      </nav>
      <nav className="nav2">
        <div>
          <h2>Peggy Adugba</h2>
        </div>
        <div>
          <h2 onClick={handleToggle}>
            <b>
              {!toggle ? (
                <>&#x2630;</>
              ) : (
                <p style={{ fontSize: "40px" }}>&times;</p>
              )}
            </b>
          </h2>
        </div>
        {toggle && (
          <ul className="nav2-li">
            <a href="#first" onClick={() => setToggle(false)}>
              <li>About Us</li>
            </a>
            <a href="#second" onClick={() => setToggle(false)}>
              <li>Our Service</li>
            </a>
            <a href="#third" onClick={() => setToggle(false)}>
              <li>Galary</li>
            </a>
            <a href="#fourth" onClick={() => setToggle(false)}>
              <li>Our Story</li>
            </a>
            <a href="#fifth" onClick={() => setToggle(false)}>
              <li>Contact Us </li>
            </a>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Nav;
