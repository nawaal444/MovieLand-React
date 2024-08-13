import React from "react";
import { Routes, Route } from "react-router-dom";
import HorizontalSlider from "../components/HorizontalSlider";
import Moviecard from "../components/Moviecard";
import MovieDetails from "../components/MovieDetails";

const RoutesComponent = ({ movies, movies2024, searched }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          !searched ? (
            <HorizontalSlider items={movies2024} />
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <Moviecard movie={movie} key={movie.imdbID} />
            ))
          ) : (
            <h2>No movies found</h2>
          )
        }
      />
      <Route path="/movie/:id" element={<MovieDetails />} />
      
    </Routes>
  );
};

export default RoutesComponent;
