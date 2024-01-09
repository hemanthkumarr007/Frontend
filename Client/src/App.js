/*import logo from './logo.svg';*/
import React from "react";
import "./App.css";
import Home from "./pages/Home";
//import Categories from './pages/Categories';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  render() {
    return (
      <div>
        <Home />  
      </div>
    );
  }
}
export default App;
