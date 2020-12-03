import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
          <div className="nav-wrapper white">
            <div
              style={{
                fontFamily: "monospace",
              }}
              className="col s5 brand-logo center black-text"
            >
              <h1>
                <b>WEBank</b>
              </h1>
            </div>
          </div>
      </div>
    );
  }
}

export default Navbar;
