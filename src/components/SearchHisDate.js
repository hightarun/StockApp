//search bar component to perform search by date for search history table

import React, { useState } from "react";

export default function SearchHisDate(props) {
  var [innerSearch, setInnerSearch] = useState("");
  return (
    <div className="container">
      <div className="row">
        <div class="col-md-12 mb-4">
          <form class="form-inline mr-auto mb-4">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input
              class="form-control form-control-sm ml-3 w-75"
              aria-labelledby="search-button3"
              name="searchDate"
              id="searchDate"
              type="date"
              aria-label="Search"
              value={innerSearch}
              onChange={(e) => setInnerSearch(e.target.value)}
            />
            <button
              class="  ml-5 btn btn-light-blue btn-rounded btn-sm waves-effect waves-light"
              type="button"
              id="search-button3"
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
