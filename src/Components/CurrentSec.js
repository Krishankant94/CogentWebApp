import React, { Component } from "react";

class CurrentSec extends Component {
  render() {
    return (
      <div className="md-col current-sec p-3 bg-primary">
        <div className="row">
          <div className="col-sm">
            <div className="row">
              <div className="col">Wind</div>
              <div className="col">Humidity</div>
              <div className="col">Dew Point</div>
            </div>
            <div className="row">
              <div className="col">val1</div>
              <div className="col">val2</div>
              <div className="col">val3</div>
            </div>
            <hr />
            <div className="row">
              <div className="col">wind</div>
              <div className="col">Humidity</div>
              <div className="col">Dew point</div>
            </div>
            <div className="row">
              <div className="col">val1</div>
              <div className="col">val2</div>
              <div className="col">val3</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col ">IMAGE</div>
            </div>
            <div className="row">
              <div className="col">Weather Summary</div>
            </div>
          </div>
          <div className="col-sm">
            <div className="row">
              <div className="col">NOW</div>
            </div>
            <div className="row">
              <div className="col">86</div>

              <div className="col">BANgalore</div>
            </div>
            <hr />
            <div className="row">
              <div className="col">ONE</div>
              <div className="col">TWO</div>
              <div className="col">THREE</div>
            </div>
            <div className="row">
              <div className="col">val1</div>
              <div className="col">val2</div>
              <div className="col">val3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSec;
