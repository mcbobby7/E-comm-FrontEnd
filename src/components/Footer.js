import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="subscribe-form">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <div className="line-dec"></div>
                <h1>Subscribe to Our News Letter</h1>
              </div>
            </div>
            <div className="col-md-8 offset-md-2">
              <div className="main-content">
                <p>
                  Integer vel turpis ultricies, lacinia ligula id, lobortis
                  augue. Vivamus porttitor dui id dictum efficitur. Phasellus
                  vel interdum elit.
                </p>
                <div className="container">
                  <form id="subscribe" action="" method="get">
                    <div className="row">
                      <div className="col-md-7">
                        <fieldset>
                          <input
                            name="email"
                            type="text"
                            className="form-control"
                            id="email"
                            required=""
                          />
                        </fieldset>
                      </div>
                      <div className="col-md-5">
                        <fieldset>
                          <button
                            type="submit"
                            id="form-submit"
                            className="button"
                          >
                            Subscribe Now!
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo">
                <img
                  src="assets/images/logoBlue.png"
                  style={{ width: "150px" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/cart">Help</Link>
                  </li>
                  <li>
                    <Link to="/cart">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/cart">How It Works ?</Link>
                  </li>
                  <li>
                    <Link to="/cart">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-rss"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-text">
                <p>Copyright &copy; 2019 Mcbee </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
