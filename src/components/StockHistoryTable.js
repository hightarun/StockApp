//component for Stock history table

import React, { useState, useEffect } from "react";

//import to use jquery
import $ from "jquery";

//imports for TABLE
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

//importing search bar components
import SearchHis from "./SearchHis";
import SearchHisDate from "./SearchHisDate";

//imports for Charts
import CanvasJSReact from "../canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StockHistoryTable() {
  const [rowData, setRowData] = useState([]); // to store row data of the column
  const [search, setSearch] = useState(""); // to store the search result from search bar
  const [dateSearch, setDateSearch] = useState(""); // to store the search of from date search bar

  const [dataPoints] = useState([]); // to store the data points for the chart
  const [initialized, setInitialized] = useState(false); //to make the render of chart to be on hold until its value gets true
  var [options] = useState({}); //to set the option parameter for CanvasJS charts

  const [query] = useState([]); // to store the name of the stock company of searched symbol

  //function to set initialized state to false to make chart rerender
  const resetChart = () => {
    setInitialized(false);
  };

  //for charts
  options = {
    theme: "dark2",
    title: {
      text: "CLOSING STOCK PRICE",
    },
    axisY: {
      title: "PRICE in USD ",
      perfix: "$",
      includeZero: false,
    },
    data: [
      {
        type: "spline",
        xValueFormatString: "DD MM YYY",
        yValueFormatString: "$##0.00",
        dataPoints: dataPoints,
      },
    ],
  };

  //for table
  const columns = [
    {
      headerName: "Date",
      field: "date",
      sortable: true,
    },
    {
      headerName: "Open",
      field: "open",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "High",
      field: "high",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Low",
      field: "low",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Close",
      field: "close",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
    {
      headerName: "Volumes",
      field: "volumes",
      sortable: true,
      filter: "agNumberColumnFilter",
    },
  ];

  useEffect(() => {
    let url = `http://131.181.190.87:3001/history?symbol=${search}&from=${dateSearch}`; //api url
    fetch(url) //fetching the data from url for the table
      .then((res) => res.json())
      .then((data) =>
        data.map((stock) => {
          return {
            date: new Date(stock.timestamp).toLocaleDateString(),
            open: stock.open,
            high: stock.high,
            low: stock.low,
            close: stock.close,
            volumes: stock.volumes,
          };
        })
      )
      .then((stock) => setRowData(stock)); //putting all the data mapped in stock to rowData

    //fetching the data from the url for chart data points
    dataPoints.length = 0; //clearing the array so that every render of chart has new data

    fetch(url)
      .then((res) => res.json())
      .then(function (data) {
        for (var i = 0; i < data.length; i++) {
          dataPoints.push({
            x: new Date(data[i].timestamp),
            y: data[i].close,
          });
          query.length = 0;
          query.push([data[0].name]);
        }
        setInitialized(true); // setting the value to true so that the chart gets render
      });

    //refresh chart on press of enter key
    $(document).keydown(function (event) {
      if (event.key === "Enter") {
        $("#chartRefresh").click();
      }
    });
  }, [search, dateSearch, dataPoints, initialized, query]);

  return (
    <div className="container">
      <div
        style={{
          fontFamily: "sans-serif",
          marginBottom: "30px",
        }}
      >
        <h2 id="text1" className="pop" style={{ textAlign: "center" }}>
          Stocks History{" "}
        </h2>
        <h6 style={{ textAlign: "center" }}>
          Search stock history from a specific date{" "}
        </h6>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <SearchHis onSubmit={setSearch} />
        </div>
        <div className="col-sm-6">
          <SearchHisDate onSubmit={setDateSearch} />
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
            onCellKeyPress={(params) => {
              params.api.sizeColumnsToFit();
            }}
          />
        </div>
      </div>

      <div className="column" style={{ marginTop: "40px" }}>
        {!initialized ? (
          <h3>...Chart...</h3>
        ) : (
          <div>
            <button
              class=" btn btn-light-blue btn-rounded btn-sm waves-effect waves-light"
              type="button"
              id="chartRefresh"
              onClick={resetChart}
            >
              Click here or press enter anywhere to refresh Chart
            </button>
            <div
              style={{ textAlign: "center", marginTop: "30px" }}
              className="column"
            >
              <h4>
                <b>Showing stock history for {query}</b>
              </h4>
            </div>
            <CanvasJSChart options={options} />
          </div>
        )}
      </div>
    </div>
  );
}
export default StockHistoryTable;
