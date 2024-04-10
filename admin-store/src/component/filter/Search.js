import React from "react";

function Search({ filterText, onFilterTextChange }) {
  return (
    <div className="search">
      <span>Search</span>
      <input
        type="text"
        className="searchInput"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
