import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";

//import ListItemText from "@mui/material/ListItemText";
//import ListItem from "@mui/material/ListItem";
import AppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
//import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Typography from "@mui/material/Typography";
import { TransitionProps } from "@mui/material/transitions";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement,
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [plants, setPlants] = useState([])
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
   
    
    <React.Fragment>
      <Link onClick={handleClickOpen}>
      
        <Typography style={{ alignContent: "left", color: "black" }}>
       
          Neem (Azadirachta indigdfgca)
        </Typography>

        <Typography style={{ alignContent: "left", color: "black" }}>
          Natural Blood Purifier, Promotes Clean & Clear Skin.
        </Typography>
      </Link>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          sx={{
            position: "relative",
            background:
              "linear-gradient(151deg, rgba(92,150,7,1) 0%, rgba(96,148,52,1) 15%, rgba(135,232,128,1) 100%, rgba(209,237,198,1) 100%)",
          }}
        >
          <Toolbar>
            <Typography
              sx={{
                ml: 5,
                flex: 5,
              }}
              variant="h4"
              component="div"
              style={{ fontWeight: "600", fontSize: "1.8rem" }}
            >
              Plant Details
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              <CloseIcon style={{ fontSize: "1.9rem" }} />
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <Typography variant="h2" />
          <div className="container py-5">
            <div className="row">
              <div className="col-md-5">
                <img
                  src="tulsi2.jpg"
                  alt="plant img"
                  className="img-fluid mx-auto d-block"
                  style={{
                    height: "250px",
                    width: "550px",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="col-md-7 py-lg-5">
                <p className="text">
                  <h3>
                    Plant Name:{" "}
                    <span className="text text-success">Tulsi </span>{" "}
                  </h3>
                  <h3>
                    Different Language:{" "}
                    <span className="text text-success">
                      ತುಳಸಿ,तुलसी,துளசி,తులసిfgfdgd{" "}
                    </span>
                  </h3>
                  <h3>
                    Pronunciation: <span className="text text-success"></span>
                  </h3>
                  <h3>
                    Scientific Name:
                    <span className="text text-success">
                      Ocimum tenuiflorum
                    </span>
                  </h3>
                  Herbs: A small, seed-bearing plant without a woody stem in
                  which all aerial parts, die back to the ground at the end of
                  each growing session A Shrub is a small-to medium sized
                  perennial woody plant (Bush) with multiple stems above ground
                  & grows 6–10 m.
                </p>
              </div>
              <p className="py-3">
                {" "}
                A Tree is a perennial plant with an elongated Stem or Trunk
                supporting branches and leaves in most species. Aranyani is a
                Goddess of the Forests & the animals that dwell within them !! -
                Rigveda Ayurveda, the science of Life, has served the humanity
                since thousands of years. The word Ayurveda(Science of Life)
                derives from AYU (Life) & VEDA (Science) Ayurveda believes that
                positive health is the basis for attaining FOUR cherished goals
                of life – Dharma, Artha, Kama, Moksha. Where Positive health is
                defined as: Dosha Dhatu Samya (Well balanced Metabolism) and
                Prasanna Atma, Indriya, Manah (Happy state of the Soul, Senses &
                Mind) , senses = Gyanendriya’s.
              </p>
            </div>
            <div className="row">
              <div className="col-md-7 py-lg-5">
                <p className="text">
                  Herbs: A small, seed-bearing plant without a woody stem in
                  which all aerial parts, die back to the ground at the end of
                  each growing session A Shrub is a small-to medium sized
                  perennial woody plant (Bush) with multiple stems above ground
                  & grows 6–10 m.
                </p>
              </div>
              <div className="col-md-5">
                {" "}
                <img
                  src="tulsi1.jpg"
                  alt="plant img"
                  className="img-fluid mx-auto d-block"
                  style={{
                    height: "250px",
                    width: "550px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>

          <Divider />
        </List>
      </Dialog>
    </React.Fragment>
  );
}
