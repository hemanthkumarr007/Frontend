import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import React, { useEffect, useState } from "react";
import Basic from "../components/Basic";
import Footer from "../components/Footer";
import "./Home.css";
//import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dialog from "../components/Dialog";
//import PlantModal from "../components/PlantModal";
import axios from 'axios';

import { FaSearch } from "react-icons/fa";
import Plant from "../components/Plant";
import UserModal from "../components/UserModal";

function Home() {
   const [Plants, setPlants] = useState([])
   useEffect(() => {
     axios.get('http://localhost:3000/Home')
       .then(response => {
         setPlants(response.data); // Update the state with fetched data
         //Data=response.data;
         console.log("fetched data is", response.data); // Log fetched data
       })
       .catch(err => console.log(err));
   }, []);
  return (
    <div>
      <body>
        <Basic></Basic>
        <div className="container-fluid header p-5">
          <div className="row g-0 align-items-center flex-column-reverse ">
            <div className="col-md p-5 mt-lg-5">
              <h1 className="container display-5 ">
                Cultivating wellness through the medicinal embrace of botanical
                allies.
              </h1>
              <p className="content">
                The BNPura Lake blog is a treasure trove of information about
                the wonders of nature. Among the many natural wonders discussed
                on this blog are the medicinal plants found in and around the
                lake. These plants are known to have therapeutic properties
                which can be used to help us recover from a variety of ailments.
                One of the most interesting medicinal plants found in the area
                is the Arjuna Tree. This tree is known for its ability to help
                treat heart diseases and improve cardiovascular health. The
                leaves of this tree are rich in antioxidants which help to keep
                the heart healthy.
              </p>
              {
      Plants.map(Plants => (
        <div key={Plants._id}> {/* Assuming _id is a unique identifier */}
          <p>{Plants.plant_id}</p>
         
        </div>
      ))
      }
            </div>
          </div>
        </div>

        <div className="containers1">
          <div className="row">
            <div className="col-md-6">
              <h1>Plant List</h1>
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
                    marginRight: "50px",
                  }}
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
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
                    <Plant />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
                    <Dialog />
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
      </body>
    </div>
  );
}
export default Home;
