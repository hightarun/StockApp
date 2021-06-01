import React, { useEffect } from "react";

//importing components
import Landing from "./components/Landing";
import Footer from "./components/footer";
import StockTable from "./components/StockTable";
import StockHistoryTable from "./components/StockHistoryTable";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#c0c0c0"; //setting the background color fro the entire web page
  });
  return (
    <div>
      <header>
        <Landing style={{ position: "sticky" }} />
      </header>
      <div className="container">
        <div id="ko" style={{ paddingTop: "100px" }}>
          <StockTable />
        </div>
        <div id="ok" style={{ paddingTop: "100px" }}>
          <StockHistoryTable />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
