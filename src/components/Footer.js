import React from "react";
import logo from "./images/logoBlue.png";

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
                  Subscribe to our news letter to get regular updates on new
                  products and notifications.
                </p>
                <div className="container">
                  <form id="subscribe" action="" method="get">
                    <div className="row">
                      <div className="col-md-7" style={{ marginTop: "20px" }}>
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
                      <div className="col-md-5" style={{ marginLeft: "-20px" }}>
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
                <img src={logo} style={{ width: "150px" }} alt="" />
              </div>
            </div>
            <div className="col-md-12">
              {/* <div className="footer-menu">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/">Help</Link>
                  </li>
                  <li>
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-md-12">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/madu.bobby.1">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://mobile.twitter.com/mcbobbymadu">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/pro-mcbobby/">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  {/* <li>
                    <Link to="/">
                      <i className="fa fa-rss"></i>
                    </Link>
                  </li> */}
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
                <p>Copyright &copy; 2021 Mcbee </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
