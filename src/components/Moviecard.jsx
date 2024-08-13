import React from 'react';
import { Link } from 'react-router-dom';

const Moviecard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`} className='movie-link'>
      <div className='movie'>
        <div>
            <p>{movie.Year}</p>
        </div>
        <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={"Movie Poster"}></img>
        </div>
        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Moviecard;