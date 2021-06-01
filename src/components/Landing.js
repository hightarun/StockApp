//component responsible for the navbar, logo, Heading and landing page of the web app

import React from "react";

//importing css file
import "../style.css";

function Landing() {
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
              <a href="#ko">
                <b>Stocks</b>
              </a>
            </li>
            <li>
              <a href="#ok">
                <b>History</b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container" style={{ paddingTop: "100px" }}>
        <div className="column">
          <img
            className="pop"
            id="logo"
            src={require("../logo.png")}
            alt="logo"
          ></img>
          <h1 className="pop" id="text">
            <b>STOCK MARKET STATISTICS</b>
          </h1>
        </div>
        <div className="column">
          <h4>
            <b>What is the Stock Market?</b>
          </h4>
          <p>
            The stock market refers to the collection of markets and exchanges
            where regular activities of buying, selling, and issuance of shares
            of publicly-held companies take place. Such financial activities are
            conducted through institutionalized formal exchanges or
            over-the-counter (OTC) marketplaces which operate under a defined
            set of regulations.
          </p>
          <br />
          <h4>
            <b> 3 Ways to use statistics to invest in stocks</b>
          </h4>
          <br />
          <p>
            <ul>
              <li>
                <h6>
                  <b>Price to Book Ratio or Price to Equity Ratio</b>
                </h6>
              </li>
              <br />
              <li>
                <h6>
                  <b>Price to Sales Ratio The Price to Sales Ratio (PSR)</b>{" "}
                </h6>
              </li>
              <br />
              <li>
                <h6>
                  <b>PEG Ratio or Price to Earnings Growth Ratio</b>
                </h6>
              </li>
            </ul>
            <br />
            <em>
              The Price to Earnings Growth Ratio may be the most important
              statistic in understanding the intrinsic value of a stock. The
              intrinsic value of the stock means the actual worth of the stock.
              With this in mind, the stock may go up and down in the short-term
              when investors take profits.
              <br />
              <b>
                A statistic is very useful to evaluate stocks that you are
                looking to hold for the long-term.
              </b>
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
