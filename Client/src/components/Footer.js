import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <body>
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn">
          <div className="container py-0">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6"></div>
              <div className="col-lg-3">
                <h5 className="col1 text-white mb-4">Get In Touch</h5>
                <p className="col1 mb-1">
                  <i class="fa fa-map-marker-alt me-3"></i>
                </p>
                <p className="col1 mb-1">
                  <i class="fa fa-phone-alt me-3"></i>+012 345 67890
                </p>
                <p className="col1 mb-1">
                  <i class="fa fa-envelope me-3"></i>info@example.com
                </p>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="col text-white">Quick Links</h5>
                <Link className="btn btn-link text-white-50" to="/Aboutus">
                  About Us
                </Link>
                <Link className="btn btn-link text-white-50" to="/">
                  Contact Us
                </Link>
                <Link className="btn btn-link text-white-50" to="/ABOUT">
                  Privacy Policy
                </Link>
                <Link className="btn btn-link text-white-50" to="/ABOUT">
                  Terms & Condition
                </Link>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-white mb-4">Leave Comment Here</h5>
                <div
                  className="position-relative mx-auto"
                  style={{ maxwidth: "400px" }}
                >
                  <input
                    className="form-control bg-transparent text-white w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder=""
                  />
                  <button
                    type="button"
                    className="btn btn-success py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy;
                  <Link className="border-bottom" to="/">
                    Herb Cartel
                  </Link>
                  , All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div class="footer-menu">
                    <Link to="/Home">Home</Link>
                    <Link to="/">Help</Link>
                    <Link to="/">FQAs</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Footer;
