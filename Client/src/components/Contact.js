import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
//import ListItemText from "@mui/material/ListItemText";
//import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
//import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
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

  return (
    <React.Fragment>
      <Link
        variant="outlined"
        onClick={handleClickOpen}
        style={{ color: "#000000", textDecoration: "none" }}
      >
        Contact
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
              Contact Details
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
              <div className="col-md-5"></div>
              <div className="col-md-7 py-lg-5">
                <p className="text"></p>
              </div>
              <p className="py-3"></p>
            </div>
          </div>

          <Divider />
        </List>
      </Dialog>
    </React.Fragment>
  );
}
