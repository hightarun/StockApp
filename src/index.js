import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import $ from "jquery";

//jquery to fade out preloader after window load
$(window).on("load", function () {
  $(".preloader").fadeOut(1000);
});

ReactDOM.render(
  <React.StrictMode>
    <div className="preloader"></div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
