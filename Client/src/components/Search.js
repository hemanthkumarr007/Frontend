import { React } from "react";
import TextField from "@mui/material/TextField";
import "./Search.css";

function App() {
  return (
    <div className="main">
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
    </div>
  );
}

export default App;
