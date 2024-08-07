import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import searchicon from './search.svg'
import Moviecard from './Moviecard'

//714ad8f7
const API_URL="https://www.omdbapi.com?apikey=714ad8f7"
const movie1= {
"Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
"Title": "Italian Spiderman",
"Type": "movie",
"Year": "2007",
"imdbID": "tt2705436"
}

const App = () => {
    const [movies, setmovies]= useState([]);
    const [searchterm, setsearchterm]= useState("");
    const searchmovies = async(title) => {
        const response= await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        setmovies(data.Search);
        }
        useEffect(()=>{
            searchmovies(searchterm);
        },[])
  return (
    <div className='app'>
      <h1>Movie Land</h1>
      <div className='search'>
        <input
            placeholder='Search for Movies'
            value={searchterm}
            onChange={(e)=>{setsearchterm(e.target.value)}}
        />
        <img
            src={searchicon}
            alt="search icon"
            onClick={()=>{searchmovies(searchterm)}}
        />
      </div>
        {
            movies?.length>0
            ? (
                <div className='container'>
                {movies.map((movie)=>(
                    <Moviecard movie={movie}/>
               ))}
                </div>
            ) : (
                <div className='container'>
                    <h2>No movies found</h2>
                </div>
            )
        }
     
    </div>
  )
}

export default App
