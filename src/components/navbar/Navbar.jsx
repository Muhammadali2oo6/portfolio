import React from "react";
import './navbar.css'
function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img
            src="https://t3.ftcdn.net/jpg/04/63/13/64/360_F_463136431_SGRgE71Zr3YG5m7E6gZbCWA7e7TAFRyZ.jpg"
            alt=""
          />
        </div>
        <div className="link">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Work</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
