import React from "react";
import "./SearchBox.css";

function SearchBox({ handleOnSubmit, handleOnChange }) {
  return (
    <form className="form" onSubmit={handleOnSubmit}>
      <input
        className="input"
        type="search"
        name="query"
        placeholder={`i.e. Spider-Man`}
        onChange={handleOnChange}
      />
    </form>
  );
}

export default SearchBox;
