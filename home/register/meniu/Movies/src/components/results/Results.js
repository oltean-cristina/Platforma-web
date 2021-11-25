import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "../VideoCard/VideoCard";
import axios from "../../axios";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(selectedOption);
      setMovies(req.data.results);
      return req;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <div>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <VideoCard key={movie.id} movie={movie} />
          ))}
      </div>
    </div>
  );
}

export default Results;
