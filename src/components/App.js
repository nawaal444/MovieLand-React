import React from "react";
import "../styling/App.css";
import useMovieSearch from "../hooks/useMovieSearch";
import RoutesComponent from "../routing/Routes";
import Landing from "./Landing";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

const App = () => {
  const {
    movies,
    movies2024,
    searchMovies,
    searchTerm,
    setSearchTerm,
    searched,
    setSearched,
    handleSearch,
    handleKeyDown,
    setHorror,
    horror,
  } = useMovieSearch();
const location=useLocation();
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <Landing
        location={location}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleKeyDown={handleKeyDown}
        searched={searched}
        horror={horror}
        setHorror={setHorror}
      />
<div className="container">
<RoutesComponent
  movies={movies}
  movies2024={movies2024}
  searched={searched}/>
</div>
  </div>
  );
};
export default App;
