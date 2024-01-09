import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Basic.css";
//import Contact from "../components/Contact";

class Basic extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <body>
          <nav id="navbrand">
            <div className="d-flex align-items-center">
              <div id="logo p-0">
                <img
                  src="logo.png"
                  style={{ marginRight: "10px" }}
                  alt="logo"
                ></img>
              </div>
              <div className="d-flex flex-column align-items-center ml-2">
                <Link to="/Home">
                  <h2 className="title" id="title">
                    Herbal Cartel
                  </h2>
                </Link>
                <p>Seeding aspirations, Cultivating Moments</p>
              </div>
            </div>

            <div className="item ml-auto">
              <ul
                id="navbar"
                className={this.state.clicked ? "navbar active" : "#navbar"}
              >
                <li>
                  <Link to="/Home" className="active">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/Aboutus">About</Link>
                </li>
                <li>
                  <div className="nav-item dropdown">
                    <Link
                      to="/"
                      className="nav-link dropdown-toggle"
                      id="dropdown"
                      data-bs-toggle="dropdown"
                    >
                      Categories
                    </Link>
                    <div className="dropdown-menu">
                      <Link to="/Categories" className="dropdown-item">
                        Herbs
                      </Link>
                      <Link to="/Categories" className="dropdown-item">
                        Shurb
                      </Link>
                      <Link to="/Categories" className="dropdown-item">
                        Tree
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
        </body>
      </>
    );
  }
}
export default Basic;
