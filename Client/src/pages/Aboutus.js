import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/js/bootstrap.js";
import "jquery/dist/jquery.slim";
//import React from "react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Basic from "../components/Basic";
import Footer from "../components/Footer";
import "./Categories.css";
//import PlantModal from "../components/PlantModal";
//import UserModal from "../components/UserModal";
//import Dialog from "../components/Dialog";
//import { Link } from "react-router-dom";
//import { FaSearch } from "react-icons/fa";

//import Search from "../components/Search";
function Categories() {
  // let Data;
   const [student, setUsers] = useState([])
   useEffect(() => {
     axios.get('http://localhost:3000/Aboutus')
       .then(response => {
         setUsers(response.data); // Update the state with fetched data
         //Data=response.data;
         console.log("fetched data is", response.data); // Log fetched data
       })
       .catch(err => console.log(err));
   }, []); 
  
  // console.log("fetched data is"+JSON.stringify(student))
  return (
    <body
      style={{ minHeight: "200vh", display: "flex", flexDirection: "column" }}
    >
      <>
        <Basic></Basic>
        <div className="containers">
          <div className="row">
            <div className="col-md-6">
              <h1>
                <u>ABOUT US</u>

              </h1>
              gfg
               
              {
  student.map(student => (
    <div key={student._id}> {/* Assuming _id is a unique identifier */}
       <p>name: {student.name}</p>
      <p>age: {student.age}</p>
    </div>
  ))
}

            </div>
          </div>
        </div>
        <div style={{ marginTop: "auto" }}>
          
          <Footer></Footer>
        </div>
      </>
    </body>
  );
}

export default Categories;
