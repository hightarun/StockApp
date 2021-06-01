//component responsible for the footer of the web app

import React from "react";

//importing css file
import "../style.css";

function Footer() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="foot">
        <div className="footText">
          <h5>
            <b>Kanika &#169;2020</b>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
