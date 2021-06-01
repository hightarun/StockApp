//search bar component to perform search by symbol for stock history table

import React, { useState } from "react";

//import to use jquery
import $ from "jquery";

//disabling form submit and triggering search button on enter key press
$(function () {
  $("form").submit(function () {
    $("#search-button2").click();
    return false;
  });
});

export default function SearchHis(props) {
  var [innerSearch, setInnerSearch] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div class="col-md-12 mb-4">
          <form class="form-inline mr-auto mb-4">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input
              class="form-control form-control-sm ml-3 w-75"
              aria-labelledby="search-button2"
              name="search"
              id="search"
              type="text"
              placeholder="Search by symbol"
              aria-label="Search"
              value={innerSearch}
              onChange={(e) => setInnerSearch(e.target.value)}
            />
            <button
              class="  ml-5 btn btn-light-blue btn-rounded btn-sm waves-effect waves-light"
              type="button"
              id="search-button2"
              onClick={() => props.onSubmit(innerSearch)}
            >
              Search
            </button>
            <button
              class="ml-0 btn btn-light-blue btn-rounded btn-sm my-0 waves-effect waves-light"
              type="button"
              id="reset-button"
              onClick={() => setInnerSearch("")}
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
