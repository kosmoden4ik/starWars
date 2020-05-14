import React from "react";
import "./header.css";

const Header = () => {
  return (
    //  <div class="card text-white bg-primary mb-3" style="max-width: 20rem;">
    // <div class="card-header">Header</div>
    <div className="header d-flex">
      <h3>
        <a href="#">Star DB</a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};
export default Header;
