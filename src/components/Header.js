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
                  Nigeria best online market, with quality and flexible service.
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
