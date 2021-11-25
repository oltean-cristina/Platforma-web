import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import SearchBox from "./components/SearchBox/SearchBox";
import Results from "./components/Results/Results";
import requests from "./requests";

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
  const [query, setQuery] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setSelectedOption(requests.searchMovies + query);
  };

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="app">
      <Header />

      <SearchBox
        setSelectedOption={setSelectedOption}
        input={setQuery}
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
      />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;
