//component responsible for the navbar, logo and Heading of the web app

import React, { Component } from "react";

//importing css file
import "../header.css";

function Header() {
  return (
    <div>
      <div class="navbar">
        <div className="container">
          <ul className="nav">
            <li>
              <a href="/index.html">
                <b>Home</b>
              </a>
            </li>
            <li>
              <a href="#ok">
                <b>Stock History</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container" style={{ paddingTop: "80px" }}>
        <div className="column">
          <img
            className="pulsate"
            id="logo"
            src={require("../logo.png")}
            alt="logo"
          ></img>
          <h1 className="pop" id="text">
            STOCK MARKET STATISTICS
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
