import React, { Component } from "react";
import ReactDOM from "react-dom";

// components
import CurrentSec from "./Components/CurrentSec";
// styles
import "./styles.scss";

class App extends Component {
  render() {
    return (
      <div className="main container">
        <CurrentSec />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
