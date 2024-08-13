import React from "react";
import searchicon from "../assets/search.svg";
import "../styling/App.css";
import { Link } from "react-router-dom";

const Landing = ({
  location,
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleKeyDown,
  searched,
  horror,
  setHorror,
}) => {
  return (
    <>
      {location.pathname === "/" && !searched && (
        <>
          <div className="search">
            <input
              placeholder="Search for Movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <img src={searchicon} alt="search icon" onClick={handleSearch} />
          </div>
          <h2 style={{ color: "silver", margin: 0, padding: 0 }}>
            Top Picks From 2024
          </h2>
          <button
            className="button-74"
            onClick={() => {
              setHorror(true);
              console.log(horror);
            }}
          >
            Horror
          </button>
        </>
      )}
    </>
  );
};

export default Landing;
