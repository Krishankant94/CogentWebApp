import React, { Component } from "react";

class CurrentSec extends Component {
  render() {
    return (
      <div className="md-col current-sec">
        <div className="row">
          <div class="col-sm">
            <div class="row">
              <div class="col">Wind</div>
              <div class="col">Humidity</div>
              <div class="col">Dew Point</div>
            </div>
            <div class="row">
              <div class="col">val1</div>
              <div class="col">val2</div>
              <div class="col">val3</div>
            </div>
            <hr />
            <div class="row">
              <div class="col">wind</div>
              <div class="col">Humidity</div>
              <div class="col">Dew point</div>
            </div>
            <div class="row">
              <div class="col">val1</div>
              <div class="col">val2</div>
              <div class="col">val3</div>
            </div>
          </div>
          <div class="col-sm">hkj</div>
          <div class="col-sm">
            <div class="row">
              <div class="col">NOW</div>
            </div>
            <div class="row">
              <div class="col">86</div>

              <div class="col">BANgalore</div>
            </div>
            <hr />
            <div class="row">
              <div class="col">ONE</div>
              <div class="col">TWO</div>
              <div class="col">THREE</div>
            </div>
            <div class="row">
              <div class="col">val1</div>
              <div class="col">val2</div>
              <div class="col">val3</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentSec;
