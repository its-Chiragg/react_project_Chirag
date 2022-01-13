import React from "react";
import "../card.css";

const Header = () => {
  
  return (
    <div className="container">
      <div className="card-header">
        <div className="form-outline">
          <input
            type="search"
            id="form1"
            className="form-control"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <p>
          <a href="#">
            <i className="fa fa-bars"></i>
          </a>
          <a href="#">
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </a>
          <a href="#">
            <i className="fa fa-star" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
