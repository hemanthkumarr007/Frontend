import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./Categories.css";
import Footer from "../components/Footer";
import Basic from "../components/Basic";
import "jquery/dist/jquery.slim";
import "bootstrap/dist/js/bootstrap.bundle";
import PlantModal from "../components/PlantModal";
import UserModal from "../components/UserModal";
import Dialog from "../components/Dialog";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

//import Search from "../components/Search";
function Categories() {
  return (
    <body>
      <>
        <Basic></Basic>
        <div className="containers">
          <div className="row">
            <div className="col-md-6 align-items-center">
              <h1>Herbs</h1>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="search-bar-container">
                <input
                  type="text"
                  className="search-bar-input"
                  placeholder="Search by name"
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: "8px",
                    height: "30px",
                    width: "200px",
                    marginRight: "10px",
                  }}
                />
                <button
                  type="button"
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                    marginRight: "10px",
                  }}
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container2">
          <h4>
            Herbs are short-sized plants with soft, green, delicate stems
            without woody tissues. They complete their life cycle within one or
            two seasons. Generally, they have few branches or are branchless.
            These can be easily uprooted from the soil.
          </h4>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <Dialog></Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <PlantModal></PlantModal>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="container1 py-2">
                <div className="rectangle1">
                  <div className="circle">
                    <img src="tulsi2.jpg" alt="" />
                  </div>
                  <div className="content1">
                    <PlantModal></PlantModal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button1 col-12 text-center py-5" data-wow-delay="0.1s">
          <Link className="btn btn-success py-3 px-5" to="">
            <UserModal />
          </Link>
        </div>
        <Footer></Footer>
      </>
    </body>
  );
}

export default Categories;
