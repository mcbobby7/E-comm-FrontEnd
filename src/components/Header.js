import React from "react";
import { Link } from "react-router-dom";
import Navs from "./nav/nav";

const Header = () => {
  return (
    <header>
      <Navs />

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="caption">
                <h2>MCBEE ONLINE STORE</h2>
                <div className="line-dec"></div>
                <p>
                  Pixie HTML Template can be converted into your desired CMS
                  theme. Total <strong>5 pages</strong> included. You can use
                  this Bootstrap v4.1.3 layout for any CMS. .
                </p>
                <div className="main-button">
                  <Link to="/cart">Order Now!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
