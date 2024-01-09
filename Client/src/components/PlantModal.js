import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PlantModal.css";
const PlantModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Link to="" onClick={handleOpen} className="text text-dark">
        Plant Name
      </Link>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${modalOpen ? "show" : ""}`}
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden={!modalOpen}
        style={{ display: modalOpen ? "block" : "none" }}
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header" style={{ border: "none" }}>
              <h2
                className="modal-title text text-center"
                id="exampleModalLabel"
              >
                Plant Name
              </h2>
              <button
                className="close"
                onClick={handleClose}
                aria-label="Close"
                style={{
                  fontSize: "3.5rem",
                  fontweight: "300",
                  padding: "0.5rem 0.5rem",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-justify">
              <div className="container">
                <div className="row">
                  <div className="col-md-5">
                    <img
                      src="DSC03336.jpg"
                      alt="plant img"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                  <div className="col-md-7">
                    <p className="text">
                      Herbs: A small, seed-bearing plant without a woody stem in
                      which all aerial parts, die back to the ground at the end
                      of each growing session A Shrub is a small-to medium sized
                      perennial woody plant (Bush) with multiple stems above
                      ground & grows 6–10 m.
                    </p>
                  </div>
                  <p className="py-3">
                    {" "}
                    A Tree is a perennial plant with an elongated Stem or Trunk
                    supporting branches and leaves in most species. Aranyani is
                    a Goddess of the Forests & the animals that dwell within
                    them !! - Rigveda Ayurveda, the science of Life, has served
                    the humanity since thousands of years. The word
                    Ayurveda(Science of Life) derives from AYU (Life) & VEDA
                    (Science) Ayurveda believes that positive health is the
                    basis for attaining FOUR cherished goals of life – Dharma,
                    Artha, Kama, Moksha. Where Positive health is defined as:
                    Dosha Dhatu Samya (Well balanced Metabolism) and Prasanna
                    Atma, Indriya, Manah (Happy state of the Soul, Senses &
                    Mind) , senses = Gyanendriya’s.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <p className="text">
                      Herbs: A small, seed-bearing plant without a woody stem in
                      which all aerial parts, die back to the ground at the end
                      of each growing session A Shrub is a small-to medium sized
                      perennial woody plant (Bush) with multiple stems above
                      ground & grows 6–10 m.
                    </p>
                  </div>
                  <div className="col-md-5">
                    {" "}
                    <img
                      src="DSC03336.jpg"
                      alt="plant img"
                      className="img-fluid mx-auto d-block"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-success py-1 px-2"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End of Bootstrap Modal */}
    </>
  );
};

export default PlantModal;
