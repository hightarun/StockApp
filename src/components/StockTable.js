//component for stock table

import React, { useState, useEffect } from "react";

//imports for the table
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

//importing searchbar components
import Searchsym from "./Searchsym";
import Searchind from "./Searchind";

function StockTable() {
  const [rowData, setRowData] = useState([]); // to store row data of the column
  const [search, setSearch] = useState(""); // to store the search result from search bar
  const [searchind, setSearchind] = useState(""); // to store the search of from industry search bar

  //for table
  const columns = [
    {
      headerName: "Symbol",
      field: "symbol",
      filter: "agTextColumnFilter",
    },
    { headerName: "Name", field: "name", filter: "agTextColumnFilter" },
    { headerName: "Industry", field: "industry", filter: "agTextColumnFilter" },
  ];

  useEffect(() => {
    let url = `http://131.181.190.87:3001/all`; //default api url
    const url1 = `http://131.181.190.87:3001/all?symbol=${search}`; //url api for search by symbol
    const url2 = `http://131.181.190.87:3001/industry?industry=${searchind}`; // url api for search by industry

    //condition to check which search did the user performed
    if (searchind !== "") {
      url = url2;
    } else {
      url = url1;
    }

    //fetching the data from the url for the table
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        data.map((stock) => {
          return {
            symbol: stock.symbol,
            name: stock.name,
            industry: stock.industry,
          };
        })
      )
      .then((stock) => setRowData(stock)); //putting all the data mapped in stock to rowData
  }, [search, searchind]);

  return (
    <div className="container">
      <div
        style={{
          fontFamily: "sans-serif",
          marginBottom: "30px",
        }}
      >
        <h2 id="text1" className="pop" style={{ textAlign: "center" }}>
          Stocks Statistics{" "}
        </h2>
        <h6 style={{ textAlign: "center" }}>
          Search stocks using symbol or industry name
        </h6>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <Searchsym onSubmit={setSearch} />
        </div>
        <div className="col-sm-6">
          <Searchind onSubmit={setSearchind} />
        </div>
      </div>
      <div className="row">
        <div
          className="ag-theme-balham-dark col-sm-12"
          style={{
            height: "600px",
            width: "100%",
          }}
        >
          <AgGridReact
            columnDefs={columns}
            rowData={rowData}
            pagination={true}
            paginationPageSize={18}
            rowSelection="single"
            onGridReady={(params) => {
              params.api.sizeColumnsToFit();
              params.api.showLoadingOverlay();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default StockTable;
